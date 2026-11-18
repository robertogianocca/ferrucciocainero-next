/** True for a real calendar date written as YYYY-MM-DD. */
export function isIsoDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(value);
  return !Number.isNaN(date.getTime()) && date.toISOString().startsWith(value);
}

/** 2027-09-17 → 17.09.2027 */
export function toSwissDate(isoDate: string) {
  return isoDate.split("-").reverse().join(".");
}
