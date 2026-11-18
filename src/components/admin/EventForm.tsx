"use client";

import Link from "next/link";
import { useActionState } from "react";
import { saveEvent } from "@/app/admin/actions";
import type { CalendarEvent } from "@/data/events";
import { toSwissDate } from "@/lib/dates";
import DeleteEventButton from "./DeleteEventButton";
import { buttonClass, errorClass, inputClass, labelClass } from "./ui";

type EventFormProps = {
  event?: CalendarEvent;
  /** Titles and places already used, suggested while typing */
  titles: string[];
  locations: string[];
};

export default function EventForm({ event, titles, locations }: EventFormProps) {
  const [state, action, pending] = useActionState(saveEvent, {});
  const value = (field: keyof CalendarEvent) => state.values?.[field] ?? String(event?.[field] ?? "");

  return (
    <>
      <form action={action} className="space-y-5">
        <input type="hidden" name="id" value={event?.id ?? ""} />

        <label className={labelClass}>
          Titolo *
          <input
            name="title"
            required
            maxLength={150}
            list="titles"
            defaultValue={value("title")}
            className={inputClass}
          />
          <datalist id="titles">
            {titles.map((title) => (
              <option key={title} value={title} />
            ))}
          </datalist>
        </label>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className={labelClass}>
            Data *
            <input name="startDate" type="date" required defaultValue={value("startDate")} className={inputClass} />
          </label>
          <label className={labelClass}>
            Fino al <span className="text-base font-normal text-menu">(solo se dura più giorni)</span>
            <input name="endDate" type="date" defaultValue={value("endDate")} className={inputClass} />
          </label>
          <label className={labelClass}>
            Ora inizio
            <input name="startTime" type="time" defaultValue={value("startTime")} className={inputClass} />
          </label>
          <label className={labelClass}>
            Ora fine
            <input name="endTime" type="time" defaultValue={value("endTime")} className={inputClass} />
          </label>
        </div>

        <label className={labelClass}>
          Luogo
          <input
            name="location"
            maxLength={300}
            list="locations"
            defaultValue={value("location")}
            className={inputClass}
          />
          <datalist id="locations">
            {locations.map((location) => (
              <option key={location} value={location} />
            ))}
          </datalist>
        </label>

        <label className={labelClass}>
          Nota
          <textarea name="note" rows={3} maxLength={600} defaultValue={value("note")} className={inputClass} />
        </label>

        <label className="flex items-start gap-3 text-lg">
          <input
            name="cancelled"
            type="checkbox"
            defaultChecked={state.values ? state.values.cancelled === "on" : event?.cancelled}
            className="mt-1 size-5 accent-brand"
          />
          <span>
            <strong className="text-cocoa">Annullata</strong> – resta visibile sul sito, barrata
          </span>
        </label>

        {state.error && (
          <p role="alert" className={errorClass}>
            {state.error}
          </p>
        )}

        <div className="flex items-center gap-6 pt-2">
          <button disabled={pending} className={buttonClass}>
            {pending ? "Salvataggio…" : "Salva"}
          </button>
          <Link href="/admin/calendario/" className="text-lg text-menu underline hover:text-brand">
            Annulla
          </Link>
        </div>
      </form>

      {event && (
        <div className="mt-12 border-t border-black/10 pt-8">
          <DeleteEventButton id={event.id} label={`${toSwissDate(event.startDate)} – ${event.title}`} />
        </div>
      )}
    </>
  );
}
