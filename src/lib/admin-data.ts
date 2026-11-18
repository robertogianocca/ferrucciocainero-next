import "server-only";
import type { CalendarEvent } from "@/data/events";
import { readContent } from "./content-store";

const unique = (values: (string | undefined)[]) =>
  [...new Set(values.filter((value): value is string => Boolean(value)))].sort((a, b) =>
    a.localeCompare(b, "it"),
  );

/** All calendar dates, plus the titles and places already used (suggestions in the form). */
export async function getEventsForForm() {
  const { data: events } = await readContent<CalendarEvent[]>("content/events.json");
  return {
    events,
    titles: unique(events.map((event) => event.title)),
    locations: unique(events.map((event) => event.location)),
  };
}
