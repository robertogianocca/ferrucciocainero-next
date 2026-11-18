import PageTitle from "@/components/PageTitle";
import { Container } from "@/components/Section";
import SectionCards from "@/components/SectionCards";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Attività",
  description:
    "Teatro, regia e radio: le attività di Ferruccio Cainero come narratore, autore e regista – Theater, Regie und Hörspiele.",
  path: "/attivita/",
});

export default function AttivitaPage() {
  return (
    <>
      <PageTitle>Attività</PageTitle>
      <Container>
        <SectionCards
          cards={[
            {
              href: "/attivita/teatro/",
              title: "Teatro / Theater",
              text: "Narrazioni e spettacoli in repertorio, in italiano e tedesco.",
              image: {
                src: "/images/photos/20240915-ferruccio-cainero-020.jpeg",
                width: 640,
                height: 427,
                alt: "Ferruccio Cainero racconta sul palco",
              },
            },
            {
              href: "/attivita/regia-regie/",
              title: "Regia / Regie",
              text: "Messe in scena per compagnie e teatri, tra cui Barabba’s Clown.",
              image: {
                src: "/images/shows/barabbas-clown.jpg",
                width: 487,
                height: 320,
                alt: "Disegno di clown della compagnia Barabba’s Clown",
              },
            },
            {
              href: "/attivita/radio/",
              title: "Radio",
              text: "Radiodrammi e Hörspiele per RSI e SRF, con Franco Di Leo.",
              image: {
                src: "/images/shows/ferruccio-franco.jpg",
                width: 865,
                height: 597,
                alt: "Ferruccio Cainero e Franco Di Leo",
              },
            },
          ]}
        />
      </Container>
    </>
  );
}
