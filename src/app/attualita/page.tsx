import Link from "next/link";
import PageTitle from "@/components/PageTitle";
import { Container } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Attualità",
  description:
    "Cosa sta facendo ora Ferruccio Cainero: le narrazioni in repertorio, le regie per Barabba’s Clown e i nuovi progetti radio.",
  path: "/attualita/",
});

export default function AttualitaPage() {
  return (
    <>
      <PageTitle>Attualità</PageTitle>
      <Container>
        <article className="prose-fc max-w-3xl">
          <p className="!mb-6 text-sm text-menu">
            <time dateTime="2024-07-09">9 luglio 2024</time>
          </p>
          <p>
            <strong>Cioè quello che sto facendo ora.</strong>
          </p>
          <p>
            Attualmente ho tre narrazioni in repertorio che sono unite da un filo rosso, anzi verde,
            diciamo rossoverde:
          </p>
          <ol>
            <li>
              <Link href="/attivita/teatro/#acqua">Acqua</Link> (auf Deutsch:{" "}
              <Link href="/attivita/teatro/#zwischen-den-regentropfen">
                <span lang="de">Zwischen den Regentropfen</span>
              </Link>
              )
            </li>
            <li>
              <Link href="/attivita/teatro/#cera-clima-io">C’era clima io!</Link>
            </li>
            <li>
              <Link href="/attivita/teatro/#pensieri-vegetali">Pensieri vegetali</Link>
            </li>
          </ol>
          <p>
            Sempre attuale è la narrazione{" "}
            <Link href="/attivita/teatro/#da-socrate-a-putin">Da Socrate a Putin</Link>: 2500 anni in
            80 minuti.
            <br />
            <strong lang="de">Auf Deutsch: Von Sokrates bis Putin – 2500 Jahre in 80 Minuten.</strong>
          </p>
          <p>
            Insieme a Luca Domenicali della MicroBand abbiamo lo spettacolo comico musicale, ma
            seriamente documentato, sulla storia del presepe dal titolo{" "}
            <strong>Te piace o’ presepe</strong>, auf Deutsch{" "}
            <strong lang="de">Leise rieselt es nicht</strong>.
          </p>
          <p>
            Come autore e regista della compagnia <strong>Barabba’s Clown</strong> di Arese mi piace
            segnalare gli spettacoli:
          </p>
          <ol>
            <li>Piramo e Tisbe (per bambini e ragazzi)</li>
            <li>Fuori campo (per adolescenti e adulti)</li>
            <li>L’albero mi ha parlato (per bambini e famiglie)</li>
          </ol>
          <p>
            Con la compagnia teatrale{" "}
            <a href="http://www.principioattivoteatro.it" target="_blank" rel="noopener noreferrer">
              Principio Attivo Teatro
            </a>{" "}
            stiamo preparando uno spettacolo per bambini dal titolo «Cesco Spaventapasseri amico
            degli uccelli». Dovrebbe venire molto bene.
          </p>
          <p>
            È disponibile sul podcast della RSI Rete Due un mio radiodramma dal titolo «La rivolta
            del 4». E anche «Appuntamento su FM». Adesso stiamo preparando «FM il ritorno».
          </p>
        </article>
      </Container>
    </>
  );
}
