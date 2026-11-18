import type { Metadata } from "next";
import Link from "next/link";
import { noticeClass } from "@/components/admin/ui";
import type { CalendarEvent } from "@/data/events";
import { requireUser } from "@/lib/auth";
import { readContent } from "@/lib/content-store";
import { toSwissDate } from "@/lib/dates";
import { getToday } from "@/lib/today";

export const instant = false;

export const metadata: Metadata = { title: "Calendario" };

function EventRow({ event }: { event: CalendarEvent }) {
  const when = [
    event.endDate ? `${toSwissDate(event.startDate)} – ${toSwissDate(event.endDate)}` : toSwissDate(event.startDate),
    event.startTime && (event.endTime ? `${event.startTime}–${event.endTime}` : event.startTime),
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <li>
      <Link
        href={`/admin/calendario/${event.id}/`}
        className="block px-3 py-3 hover:bg-paper focus-visible:bg-paper"
      >
        <span className="block text-sm text-menu">
          {when}
          {event.cancelled && (
            <span className="ml-2 rounded bg-black/10 px-1.5 py-0.5 text-xs font-bold uppercase">
              annullata
            </span>
          )}
        </span>
        <span className={`block font-bold ${event.cancelled ? "text-menu line-through" : "text-cocoa"}`}>
          {event.title}
        </span>
        {event.location && <span className="block text-sm">{event.location}</span>}
      </Link>
    </li>
  );
}

export default async function AdminCalendarPage({ searchParams }: PageProps<"/admin/calendario">) {
  await requireUser();
  const { passate, salvato, eliminato } = await searchParams;
  const [{ data: events }, today] = await Promise.all([
    readContent<CalendarEvent[]>("content/events.json"),
    getToday(),
  ]);
  const upcoming = events.filter((event) => (event.endDate ?? event.startDate) >= today);
  const past = events.filter((event) => (event.endDate ?? event.startDate) < today).reverse();

  return (
    <>
      <div className="mb-6 flex items-center justify-between gap-4">
        <h1 className="font-display text-2xl font-semibold">Calendario</h1>
        <Link
          href="/admin/calendario/nuovo/"
          className="rounded bg-brand px-4 py-2 font-bold text-white hover:bg-brand-dark"
        >
          + Nuova data
        </Link>
      </div>

      {(salvato || eliminato) && (
        <p role="status" className={`${noticeClass} mb-6`}>
          {eliminato ? "Data eliminata." : "Salvato."} Il sito si aggiorna entro 1–2 minuti.
        </p>
      )}

      <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-menu">Prossime date</h2>
      {upcoming.length ? (
        <ul className="divide-y divide-black/10 border-y border-black/10">
          {upcoming.map((event) => (
            <EventRow key={event.id} event={event} />
          ))}
        </ul>
      ) : (
        <p className="text-menu">Nessuna data in programma.</p>
      )}

      {passate ? (
        <>
          <h2 className="mb-2 mt-10 text-sm font-bold uppercase tracking-wide text-menu">
            Date passate (non visibili sul sito)
          </h2>
          <ul className="divide-y divide-black/10 border-y border-black/10">
            {past.map((event) => (
              <EventRow key={event.id} event={event} />
            ))}
          </ul>
        </>
      ) : (
        <p className="mt-6 text-sm">
          <Link href="/admin/calendario/?passate=1" className="text-menu underline hover:text-brand">
            Mostra anche le date passate ({past.length})
          </Link>
        </p>
      )}
    </>
  );
}
