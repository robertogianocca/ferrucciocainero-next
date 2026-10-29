import EventCalendar from "@/components/EventCalendar";
import PageTitle from "@/components/PageTitle";
import { Container } from "@/components/Section";
import { events } from "@/data/events";
import { pageMetadata } from "@/lib/metadata";
import { getToday } from "@/lib/today";

export const metadata = pageMetadata({
  title: "Calendario",
  description:
    "Le prossime date di Ferruccio Cainero: spettacoli di narrazione in Svizzera, Italia e Austria – Termine und Spielorte.",
  path: "/calendario/",
});

export default async function CalendarioPage() {
  const today = await getToday();

  return (
    <>
      <PageTitle>Calendario</PageTitle>
      <Container>
        <EventCalendar events={events} today={today} />
      </Container>
    </>
  );
}
