import type { Metadata } from "next";
import Link from "next/link";
import DeleteEventButton from "@/components/admin/DeleteEventButton";
import SavedDialog from "@/components/admin/SavedDialog";
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
    <li className="flex items-center gap-3 pr-3">
      <Link
        href={`/admin/calendario/${event.id}/`}
        className="block min-w-0 flex-1 px-3 py-4 hover:bg-paper focus-visible:bg-paper"
      >
        <span className="block text-base text-menu">
          {when}
          {event.cancelled && (
            <span className="ml-2 rounded bg-black/10 px-1.5 py-0.5 text-sm font-bold uppercase">
              annullata
            </span>
          )}
        </span>
        <span
          className={`block text-lg font-bold ${event.cancelled ? "text-menu line-through" : "text-cocoa"}`}
        >
          {event.title}
        </span>
        {event.location && <span className="block text-base">{event.location}</span>}
      </Link>
      <DeleteEventButton id={event.id} label={`${toSwissDate(event.startDate)} – ${event.title}`} compact />
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
      {salvato && <SavedDialog title="Modifica salvata" />}
      {eliminato && <SavedDialog title="Data eliminata" />}

      <div className="mb-8 flex items-center justify-between gap-4">
        <h1 className="font-display text-3xl font-semibold">Calendario</h1>
        <Link
          href="/admin/calendario/nuovo/"
          className="rounded bg-brand px-6 py-3 text-lg font-bold text-white hover:bg-brand-dark"
        >
          + Nuova data
        </Link>
      </div>

      <h2 className="mb-2 text-base font-bold uppercase tracking-wide text-menu">Prossime date</h2>
      {upcoming.length ? (
        <ul className="divide-y divide-black/10 border-y border-black/10">
          {upcoming.map((event) => (
            <EventRow key={event.id} event={event} />
          ))}
        </ul>
      ) : (
        <p className="text-lg text-menu">Nessuna data in programma.</p>
      )}

      {passate ? (
        <>
          <h2 className="mb-2 mt-12 text-base font-bold uppercase tracking-wide text-menu">
            Date passate (non visibili sul sito)
          </h2>
          <ul className="divide-y divide-black/10 border-y border-black/10">
            {past.map((event) => (
              <EventRow key={event.id} event={event} />
            ))}
          </ul>
        </>
      ) : (
        <p className="mt-8 text-base">
          <Link href="/admin/calendario/?passate=1" className="text-menu underline hover:text-brand">
            Mostra anche le date passate ({past.length})
          </Link>
        </p>
      )}
    </>
  );
}
