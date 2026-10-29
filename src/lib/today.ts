import { cacheLife } from "next/cache";

/** Today's date (YYYY-MM-DD) in Switzerland. Cached so the calendar stays prerendered. */
export async function getToday() {
  "use cache";
  cacheLife("hours");
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Zurich" }).format(new Date());
}
