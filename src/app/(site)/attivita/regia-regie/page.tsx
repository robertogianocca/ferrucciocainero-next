import Image from "next/image";
import PageTitle from "@/components/PageTitle";
import { Container, Row } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Regia / Regie",
  description:
    "Ferruccio Cainero come regista: teatro per le nuove generazioni con Barabba’s Clown e altre messe in scena – aktuelle Inszenierungen.",
  path: "/attivita/regia-regie/",
});

export default function RegiaPage() {
  return (
    <>
      <PageTitle>Regia / Regie</PageTitle>
      <Container>
        <Row>
          <div className="prose-fc md:col-span-8">
            <h2 lang="de">Aktuelle Inszenierungen</h2>
            <p>Teatro per le nuove generazioni – Produzione Barabba’s Clown</p>
            <ul>
              <li>L’albero m’ha parlato</li>
              <li>Fuori campo</li>
            </ul>

            <h2 lang="de" className="mt-8">
              Verschiedene Inszenierungen
            </h2>
            <ul>
              <li>Boef &amp; Asen</li>
              <li>Alla ricerca del naso perduto</li>
              <li>Piramo e Tisbe</li>
              <li>Radio: radiosenzafili</li>
            </ul>
            <p>
              <a href="http://www.spettacoli.barabbas.it" target="_blank" rel="noopener noreferrer">
                www.spettacoli.barabbas.it
              </a>
            </p>
          </div>
          <div className="md:col-span-4">
            <Image
              src="/images/shows/barabbas-clown.jpg"
              alt="Disegno a china di clown e personaggi della compagnia Barabba’s Clown"
              width={487}
              height={320}
              loading="eager"
              sizes="(min-width: 768px) 300px, 100vw"
              className="h-auto w-full"
            />
          </div>
        </Row>
      </Container>
    </>
  );
}
