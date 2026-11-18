import PageTitle from "@/components/PageTitle";
import { Container, Row } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Radio",
  description:
    "Radiodrammi e Hörspiele di Ferruccio Cainero e Franco Di Leo per RSI Rete Uno, Rete Due e SRF 1, disponibili nei podcast.",
  path: "/attivita/radio/",
});

type RadioPlay = { title: string; subtitle?: string; station: string };

const plays: RadioPlay[] = [
  { title: "I dialoghi della ramina", station: "Rete 2 / 2012" },
  { title: "La borsa di via del Muro", station: "Rete 2 / 2013" },
  { title: "Ferruccio e Franco alle Olimpiadi", station: "Rete 1 / 2016" },
  {
    title: "L’Elvezia in gondoletta",
    subtitle: "10 episodi sulla storia degli Svizzeri a Venezia",
    station: "Rete 2 / 2015",
  },
  { title: "La storia della Svizzera italiana spiegata al popolo", station: "Rete 1 / 2017" },
  { title: "Piccola storia di un grande amore", station: "Rete 2 / 2017" },
  { title: "Rosina", station: "SRF 1 / 2019" },
  { title: "I gialli del villaggio", station: "Rete 1" },
  { title: "Vite di vetro", station: "Rete 2" },
  { title: "Un’estate d’oro", station: "Rete 2 / 2020" },
  { title: "Quando l’Italia invase il Ticino", station: "Rete 2 / 2023" },
  {
    title: "L’elogio della mandragola, tra Erasmo e Niccolò seduti a tavola",
    subtitle: "conversazioni semiserie su pace, guerra, amore e follie varie",
    station: "Rete 2 / 2023",
  },
  { title: "Un tot di personalità in cerca d’autore", station: "Rete 2 / 2023" },
  { title: "Il caganer e altre figure del presepe", station: "Rete 2 / 2023" },
  { title: "Acqua – di Ferruccio Cainero", station: "Rete 2 / 2023" },
];

// "Rosina" was only produced for SRF 1, so it appears in the German list only.
const italianPlays = plays.filter((play) => !play.station.startsWith("SRF"));

function PlayList({ items }: { items: RadioPlay[] }) {
  return (
    <ul>
      {items.map((play) => (
        <li key={play.title}>
          <strong>{play.title}</strong>
          {play.subtitle && <> – {play.subtitle}</>} ({play.station})
        </li>
      ))}
    </ul>
  );
}

export default function RadioPage() {
  return (
    <>
      <PageTitle>Radio</PageTitle>
      <Container>
        <Row>
          <div className="prose-fc md:col-span-6">
            <h2>Radiodrammi</h2>
            <p>
              Per la Rete 1 e la Rete 2 della Radiotelevisione svizzera di lingua italiana scrivo e
              realizzo radiodrammi, in tandem con il giornalista e autore Franco Di Leo.
            </p>
            <p>
              Ultimamente abbiamo realizzato 5 puntate di un radiodramma dedicato alla storia del
              Teatro Sociale di Bellinzona e una divertente audioguida per la visita dello stesso.
            </p>
            <h3>Nel podcast di Rete 1 e Rete 2 potete ascoltare:</h3>
            <PlayList items={italianPlays} />
          </div>
          <div className="prose-fc md:col-span-6" lang="de">
            <h2>Hörspiele</h2>
            <p>
              Für das Tessiner Radio Rete 1 / Rete 2 sowie SRF 1 schreibt er im Tandem mit dem
              Journalisten und Autor Franco Di Leo Hörspiele. Für das 150-jährige Jubiläum des
              Teatro Sociale di Bellinzona haben sie einen unterhaltsamen sowie informativen
              Audioguide für die Besucher erfunden.
            </p>
            <h3>Unsere Hörspiele findet man im Podcast von Rete 1 / Rete 2 / SRF 1:</h3>
            <PlayList items={plays} />
          </div>
        </Row>
      </Container>
    </>
  );
}
