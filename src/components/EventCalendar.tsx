import type { CalendarEvent } from "@/data/events";

const MONTHS = [
  "gennaio",
  "febbraio",
  "marzo",
  "aprile",
  "maggio",
  "giugno",
  "luglio",
  "agosto",
  "settembre",
  "ottobre",
  "novembre",
  "dicembre",
];

function parts(isoDate: string) {
  const [year, month, day] = isoDate.split("-");
  return { year, month: Number(month), day };
}

function formatDay(isoDate: string) {
  const { month, day } = parts(isoDate);
  return `${Number(day)} ${MONTHS[month - 1]}`;
}

function formatTime(event: CalendarEvent) {
  if (!event.startTime) return null;
  return event.endTime ? `${event.startTime} – ${event.endTime}` : event.startTime;
}

function groupBy<T>(items: T[], key: (item: T) => string) {
  const groups = new Map<string, T[]>();
  for (const item of items) {
    const k = key(item);
    groups.set(k, [...(groups.get(k) ?? []), item]);
  }
  return [...groups.entries()];
}

function EventCard({ event }: { event: CalendarEvent }) {
  const { year, month, day } = parts(event.startDate);
  const schedule = [formatTime(event), event.endDate && `fino al ${formatDay(event.endDate)}`]
    .filter(Boolean)
    .join(" · ");
  return (
    <li
      className={`flex gap-4 border-l-4 bg-white px-4 py-3 shadow-sm ${
        event.cancelled ? "border-menu/50" : "border-amber"
      }`}
    >
      <time
        dateTime={event.startDate}
        className="flex w-12 shrink-0 flex-col items-center font-display leading-none text-menu"
      >
        <span className="text-xs">{year}</span>
        <span className="my-1 text-[28px] font-semibold text-cocoa">{day}</span>
        <span className="text-xs uppercase">{MONTHS[month - 1].slice(0, 3)}</span>
      </time>
      <div className="min-w-0 py-0.5">
        <h3
          className={`font-display text-[15px] font-bold uppercase ${
            event.cancelled ? "text-menu line-through" : ""
          }`}
        >
          {event.title}
        </h3>
        {event.location && (
          <p className="mt-0.5 break-words font-display text-xs font-semibold uppercase text-cocoa/80">
            {event.location}
          </p>
        )}
        {schedule && <p className="mt-1 text-sm text-menu">{schedule}</p>}
        {event.note && (
          <p className={`mt-1 text-sm ${event.cancelled ? "font-bold text-cocoa" : ""}`}>
            {event.note}
          </p>
        )}
      </div>
    </li>
  );
}

type EventCalendarProps = {
  events: CalendarEvent[];
  /** YYYY-MM-DD */
  today: string;
};

/** Upcoming shows grouped by month, plus a collapsible archive (replaces the EventON plugin). */
export default function EventCalendar({ events, today }: EventCalendarProps) {
  const upcoming = events
    .filter((event) => (event.endDate ?? event.startDate) >= today)
    .sort((a, b) => a.startDate.localeCompare(b.startDate));
  const past = events
    .filter((event) => (event.endDate ?? event.startDate) < today)
    .sort((a, b) => b.startDate.localeCompare(a.startDate));

  return (
    <div className="space-y-10">
      {upcoming.length === 0 ? (
        <p className="prose-fc">
          Al momento non ci sono date in programma. Per informazioni e prenotazioni:{" "}
          <a href="mailto:info@ferrucciocainero.ch">info@ferrucciocainero.ch</a>
        </p>
      ) : (
        groupBy(upcoming, (event) => event.startDate.slice(0, 7)).map(([key, items]) => {
          const { year, month } = parts(`${key}-01`);
          return (
            <section key={key} aria-labelledby={`month-${key}`}>
              <h2
                id={`month-${key}`}
                className="mb-3 font-display text-lg font-bold uppercase tracking-wide text-menu"
              >
                {MONTHS[month - 1]} {year}
              </h2>
              <ul className="space-y-2">
                {items.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </ul>
            </section>
          );
        })
      )}

      {past.length > 0 && (
        <details className="group border-t border-black/10 pt-6">
          <summary className="cursor-pointer list-none font-display text-sm font-bold uppercase tracking-wide text-cocoa hover:text-brand [&::-webkit-details-marker]:hidden">
            <span className="mr-2 inline-block transition-transform group-open:rotate-90" aria-hidden="true">
              ▸
            </span>
            Archivio / Archiv – {past.length} date passate
          </summary>
          <div className="mt-6 space-y-8">
            {groupBy(past, (event) => event.startDate.slice(0, 4)).map(([year, items]) => (
              <section key={year} aria-labelledby={`year-${year}`}>
                <h2
                  id={`year-${year}`}
                  className="mb-3 font-display text-lg font-bold text-menu"
                >
                  {year}
                </h2>
                <ul className="space-y-2">
                  {items.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </details>
      )}
    </div>
  );
}
