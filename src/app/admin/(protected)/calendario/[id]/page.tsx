import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EventForm from "@/components/admin/EventForm";
import { getEventsForForm } from "@/lib/admin-data";
import { requireUser } from "@/lib/auth";

export const instant = false;

export const metadata: Metadata = { title: "Modifica data" };

export default async function EditEventPage({ params }: PageProps<"/admin/calendario/[id]">) {
  await requireUser();
  const { id } = await params;
  const { events, titles, locations } = await getEventsForForm();
  const event = events.find((item) => item.id === id);
  if (!event) notFound();

  return (
    <>
      <h1 className="mb-6 font-display text-2xl font-semibold">Modifica data</h1>
      <EventForm event={event} titles={titles} locations={locations} />
    </>
  );
}
