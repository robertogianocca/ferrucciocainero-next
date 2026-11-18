import data from "../../content/events.json";

export type CalendarEvent = {
  id: string;
  title: string;
  /** ISO date (YYYY-MM-DD), Swiss local time */
  startDate: string;
  endDate?: string;
  startTime?: string;
  endTime?: string;
  location?: string;
  note?: string;
  cancelled?: boolean;
};

/** Calendar dates, edited in the backend (/admin/calendario/) and stored in content/events.json. */
export const events: CalendarEvent[] = data;
