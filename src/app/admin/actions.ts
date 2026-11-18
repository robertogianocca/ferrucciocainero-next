"use server";

import { randomUUID } from "node:crypto";
import { redirect } from "next/navigation";
import type { CalendarEvent } from "@/data/events";
import { endSession, requireUser, startSession, verifyPassword } from "@/lib/auth";
import { ConflictError, readContent, updateContent, writeContent } from "@/lib/content-store";
import { isIsoDate, toSwissDate } from "@/lib/dates";
import { type Attualita, sanitizeDoc } from "@/lib/rich-text";

export type FormState = { error?: string; values?: Record<string, string> };

const SAVE_ERROR =
  "Salvataggio non riuscito. Riprova tra poco; se il problema continua, avvisa chi gestisce il sito.";

export async function login(_state: FormState, formData: FormData): Promise<FormState> {
  const name = String(formData.get("name") ?? "");
  const username = await verifyPassword(name, String(formData.get("password") ?? ""));
  if (!username) {
    // Slows down password guessing
    await new Promise((resolve) => setTimeout(resolve, 800));
    return { error: "Nome o password non corretti.", values: { name } };
  }
  await startSession(username);
  redirect("/admin/calendario/");
}

export async function logout() {
  await endSession();
  redirect("/admin/login/");
}

/* ---------- Calendario ---------- */

const EVENT_FIELDS = ["title", "startDate", "endDate", "startTime", "endTime", "location", "note"] as const;
const TIME = /^([01]\d|2[0-3]):[0-5]\d$/;

function parseEvent(formData: FormData) {
  const values = Object.fromEntries(
    EVENT_FIELDS.map((field) => [field, String(formData.get(field) ?? "").trim()]),
  ) as Record<(typeof EVENT_FIELDS)[number], string>;
  const cancelled = formData.get("cancelled") === "on";
  const { title, startDate, endDate, startTime, endTime, location, note } = values;

  let error: string | undefined;
  if (!title) error = "Inserisci il titolo.";
  else if (!isIsoDate(startDate)) error = "Inserisci una data valida.";
  else if (endDate && (!isIsoDate(endDate) || endDate < startDate))
    error = "La data «fino al» deve essere uguale o successiva alla data.";
  else if ((startTime && !TIME.test(startTime)) || (endTime && !TIME.test(endTime)))
    error = "Scrivi le ore nel formato 20:00.";
  else if (endTime && !startTime) error = "Inserisci anche l’ora di inizio.";
  else if (title.length > 150 || location.length > 300 || note.length > 600)
    error = "Il testo è troppo lungo.";

  if (error) return { error, values: { ...values, cancelled: cancelled ? "on" : "" } };

  // Same key order and no empty fields, like the rest of content/events.json
  const event: Omit<CalendarEvent, "id"> = {
    title,
    startDate,
    ...(endDate && endDate !== startDate && { endDate }),
    ...(startTime && { startTime }),
    ...(endTime && { endTime }),
    ...(location && { location }),
    ...(note && { note }),
    ...(cancelled && { cancelled }),
  };
  return { event, values };
}

const byDate = (a: CalendarEvent, b: CalendarEvent) =>
  a.startDate.localeCompare(b.startDate) || (a.startTime ?? "").localeCompare(b.startTime ?? "");

export async function saveEvent(_state: FormState, formData: FormData): Promise<FormState> {
  const user = await requireUser();
  const id = String(formData.get("id") ?? "");
  const parsed = parseEvent(formData);
  if (!parsed.event) return { error: parsed.error, values: parsed.values };

  const event: CalendarEvent = { id: id || randomUUID(), ...parsed.event };
  try {
    await updateContent<CalendarEvent[]>(
      "content/events.json",
      (events) => [...events.filter((item) => item.id !== event.id), event].sort(byDate),
      `Calendario: ${id ? "modificata" : "nuova"} data ${toSwissDate(event.startDate)} «${event.title}» (${user.name})`,
    );
  } catch (error) {
    console.error(error);
    return { error: SAVE_ERROR, values: parsed.values };
  }
  redirect("/admin/calendario/?salvato=1");
}

export async function deleteEvent(_state: FormState, formData: FormData): Promise<FormState> {
  const user = await requireUser();
  const id = String(formData.get("id") ?? "");
  try {
    const { data } = await readContent<CalendarEvent[]>("content/events.json");
    const event = data.find((item) => item.id === id);
    if (event) {
      await updateContent<CalendarEvent[]>(
        "content/events.json",
        (events) => events.filter((item) => item.id !== id),
        `Calendario: eliminata data ${toSwissDate(event.startDate)} «${event.title}» (${user.name})`,
      );
    }
  } catch (error) {
    console.error(error);
    return { error: SAVE_ERROR };
  }
  redirect("/admin/calendario/?eliminato=1");
}

/* ---------- Attualità ---------- */

export async function saveAttualita(_state: FormState, formData: FormData): Promise<FormState> {
  const user = await requireUser();
  const date = String(formData.get("date") ?? "");
  let doc = null;
  try {
    doc = sanitizeDoc(JSON.parse(String(formData.get("doc") ?? "")));
  } catch {}

  if (!isIsoDate(date)) return { error: "Inserisci una data valida." };
  if (!doc || doc.content.length === 0) return { error: "Il testo è vuoto." };

  const attualita: Attualita = { date, doc };
  try {
    await writeContent(
      "content/attualita.json",
      attualita,
      String(formData.get("sha") ?? ""),
      `Attualità: testo aggiornato (${user.name})`,
    );
  } catch (error) {
    if (error instanceof ConflictError) {
      return {
        error:
          "Nel frattempo qualcun altro ha salvato il testo. Copia le tue modifiche, ricarica la pagina e riprova.",
      };
    }
    console.error(error);
    return { error: SAVE_ERROR };
  }
  redirect("/admin/attualita/?salvato=1");
}
