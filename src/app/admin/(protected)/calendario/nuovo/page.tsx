import type { Metadata } from "next";
import EventForm from "@/components/admin/EventForm";
import { getEventsForForm } from "@/lib/admin-data";
import { requireUser } from "@/lib/auth";

export const instant = false;

export const metadata: Metadata = { title: "Nuova data" };

export default async function NewEventPage() {
  await requireUser();
  const { titles, locations } = await getEventsForForm();

  return (
    <>
      <h1 className="mb-6 font-display text-2xl font-semibold">Nuova data</h1>
      <EventForm titles={titles} locations={locations} />
    </>
  );
}
