import Image from "next/image";
import PageTitle from "@/components/PageTitle";
import { Container, Row, Separator } from "@/components/Section";
import { mediaBaseUrl } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Podcast",
  description:
    "Ascolta le narrazioni di Ferruccio Cainero: Acqua, Cristoforo Colombo e le farfalle e Tic Tac – e le 10 storie «vom Hörensagen».",
  path: "/podcast/",
});

type Episode = {
  title: string;
  audio: string;
  image: { src: string; width: number; height: number; alt: string };
  credits: string[];
  quote?: { text: string[]; author: string };
  description: string[];
};

const episodes: Episode[] = [
  {
    title: "Acqua",
    audio: `${mediaBaseUrl}/2023/12/Radio-Acqua.mp3`,
    image: {
      src: "/images/podcast/acqua.jpg",
      width: 474,
      height: 640,
      alt: "Ferruccio Cainero legge un testo accanto a Pierluigi Ferrari con la chitarra",
    },
    credits: [
      "Narratore: Ferruccio Cainero",
      "Autore: Ferruccio Cainero",
      "Chitarra: Pierluigi Ferrari",
    ],
    description: [
      "Per produrre una maglietta di cotone serve l’acqua di 25 vasche da bagno.",
      "Il Pakistan vende cotone a tutto il mondo. Se volete vedere dove finiscono i tre quarti dell’acqua dell’Indo aprite il vostro armadio.",
      "Non ci avevate mai pensato?",
      "Neanch’io e ci sono tante altre cose che non avevamo mai pensato.",
    ],
  },
  {
    title: "Cristoforo Colombo e le farfalle",
    audio: `${mediaBaseUrl}/2022/08/Colombo-e-le-farfalle.mp3`,
    image: {
      src: "/images/podcast/cristoforo-colombo.png",
      width: 640,
      height: 360,
      alt: "Ferruccio Cainero sul palco indica lontano con il braccio teso",
    },
    credits: ["Testo e narrazione di Ferruccio Cainero"],
    description: [
      "Un’estate da bambino mi divertii a dar la caccia alle farfalle. Ne feci una strage, ma nessun adulto mi fermò o mi disse qualcosa. A loro la sorte delle farfalle era indifferente.",
    ],
  },
  {
    title: "Tic Tac",
    audio: `${mediaBaseUrl}/2022/06/tic-tac-corretto.mp3`,
    image: {
      src: "/images/podcast/tic-tac.jpeg",
      width: 640,
      height: 427,
      alt: "Ferruccio Cainero sul palco con una mano sulla testa",
    },
    credits: ["Testo e narrazione di Ferruccio Cainero"],
    quote: {
      text: [
        "Trattali bene perché gli attori sono",
        "l’estratto, il succo, l’essenza del tempo.",
      ],
      author: "W. Shakespeare",
    },
    description: [
      "Viaggiando nel tempo con Ferruccio Cainero, resteremo stupiti e divertiti nello scoprire un filo che lega la nascita dell’industria orologiera, la riforma protestante e la nostalgia.",
      "Una narrazione che attraversa vari secoli e fa scoprire un po’ di storia della Svizzera.",
    ],
  },
];

export default function PodcastPage() {
  return (
    <>
      <PageTitle>Podcast</PageTitle>
      <Container>
        {episodes.map((episode, index) => (
          <div key={episode.title}>
            {index > 0 && <Separator />}
            <Row>
              <div className="prose-fc md:col-span-8">
                <h2>{episode.title}</h2>
                <p>
                  {episode.credits.map((line, i) => (
                    <strong key={line} className="block">
                      {line}
                      {i < episode.credits.length - 1 && <span className="sr-only">,</span>}
                    </strong>
                  ))}
                </p>
                {episode.quote && (
                  <blockquote className="mb-4 border-l-4 border-amber pl-4 italic">
                    <p className="mb-1">
                      {episode.quote.text.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                    <footer className="text-sm not-italic text-menu">— {episode.quote.author}</footer>
                  </blockquote>
                )}
                <p>
                  {episode.description.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                <audio controls preload="none" className="mt-2 w-full" aria-label={`Ascolta: ${episode.title}`}>
                  <source src={episode.audio} type="audio/mpeg" />
                  <a href={episode.audio}>Scarica l’audio di «{episode.title}» (MP3)</a>
                </audio>
              </div>
              <div className="flex justify-center md:col-span-4">
                <Image
                  src={episode.image.src}
                  alt={episode.image.alt}
                  width={episode.image.width}
                  height={episode.image.height}
                  loading={index === 0 ? "eager" : undefined}
                  sizes="(min-width: 768px) 300px, 100vw"
                  className="h-auto w-full max-w-sm"
                />
              </div>
            </Row>
          </div>
        ))}

        <Separator />

        <Image
          src="/images/podcast/vom-hoerensagen.jpg"
          alt="Libro illustrato aperto con fiori e farfalle e la foto di Ferruccio Cainero: «Geschichten aus der Herzbaracke – Vom Hörensagen»"
          width={2000}
          height={1229}
          sizes="(min-width: 1024px) 984px, 100vw"
          className="mb-8 h-auto w-full"
        />
        <Row>
          <div className="prose-fc md:col-span-6">
            <p>
              <strong>
                Al seguente link potete ascoltare da subito 10 piccole storie ai tempi del
                coronavirus:
              </strong>{" "}
              <a href="https://www.herzbaracke.ch/" target="_blank" rel="noopener noreferrer">
                www.herzbaracke.ch
              </a>
            </p>
            <p>
              Negli ultimi mesi Ferruccio Cainero ha avuto tempo (più di quanto desiderasse) per
              scrivere nuove storie. Ne sono scaturiti 10 racconti intriganti, che ora può offrire al
              pubblico nonostante la chiusura dei teatri. Questo progetto è una collaborazione con il
              Salon Theater Herzbaracke.
            </p>
            <p>
              Invece del biglietto di entrata è possibile fare una donazione, che va direttamente
              all’artista e alla Herzbaracke, per sostenere la cultura in questi momenti difficili.
            </p>
          </div>
          <div className="prose-fc md:col-span-6" lang="de">
            <p>
              <strong>
                Ab sofort über folgenden Link zu hören: 10 kleine Geschichten vom Hörensagen – in
                Zeiten von Corona:
              </strong>{" "}
              <a href="https://www.herzbaracke.ch/" target="_blank" rel="noopener noreferrer">
                www.herzbaracke.ch
              </a>
            </p>
            <p>
              Ferruccio Cainero hatte in den letzten Monaten Zeit (mehr als ihm lieb war),
              Geschichten zu schreiben. Herausgekommen sind 10 unterhaltsame Geschichten, die er nun –
              trotz Veranstaltungsverboten – dem Publikum präsentieren kann. Und zwar online über
              oben erwähnten Link. Es ist ein Projekt in Zusammenarbeit mit dem Salon Theater
              Herzbaracke. Statt ein Eintrittsgeld zu bezahlen, darf eine Spende gemacht werden,
              welche direkt an Ferruccio und an die Herzbaracke geht und die Kultur in diesen schweren
              Zeiten unterstützt.
            </p>
          </div>
        </Row>
      </Container>
    </>
  );
}
