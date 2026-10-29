import Image from "next/image";
import PageTitle from "@/components/PageTitle";
import { Container } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Recensioni",
  description:
    "Recensioni e articoli di stampa sugli spettacoli di Ferruccio Cainero: Acqua, Zwischen den Regentropfen, Von Sokrates bis Putin.",
  path: "/biography/recensioni/",
});

type Review = {
  show: string;
  source: string;
  pdf: string;
  image: string;
  width: number;
  height: number;
  lang: "it" | "de";
};

const reviews: Review[] = [
  {
    show: "Acqua",
    source: "L’Osservatore – «Acqua, Ferruccio Cainero a Lugano», 12 luglio 2023",
    pdf: "/downloads/reviews/acqua-lugano-2023.pdf",
    image: "/images/reviews/acqua-lugano-2023.jpg",
    width: 1058,
    height: 1497,
    lang: "it",
  },
  {
    show: "Acqua",
    source: "Corriere del Ticino – «L’oro blu e l’ambiente», Giorgio Thoeni, 6 febbraio 2024",
    pdf: "/downloads/reviews/acqua-thoeni-2024.pdf",
    image: "/images/reviews/acqua-thoeni-2024.jpg",
    width: 1058,
    height: 1497,
    lang: "it",
  },
  {
    show: "Zwischen den Regentropfen",
    source: "P.S. – «Steter Tropfen», 10. Oktober 2025",
    pdf: "/downloads/reviews/zwischen-den-regentropfen-waedenswil-2025.pdf",
    image: "/images/reviews/zwischen-den-regentropfen-waedenswil-2025.jpg",
    width: 1184,
    height: 1587,
    lang: "de",
  },
  {
    show: "Von Sokrates bis Putin",
    source: "Volksblatt, Vaduz – «Grossmeister der Erzählkunst als zeitloser Greis im Schlösslekeller», Dietmar Hofer, 25. Februar 2023",
    pdf: "/downloads/reviews/von-sokrates-bis-putin-vaduz.pdf",
    image: "/images/reviews/von-sokrates-bis-putin-vaduz.jpg",
    width: 1058,
    height: 1497,
    lang: "de",
  },
];

export default function RecensioniPage() {
  return (
    <>
      <PageTitle>Recensioni</PageTitle>
      <Container>
        <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {reviews.map((review, index) => (
            <li key={review.pdf} lang={review.lang}>
              <a
                href={review.pdf}
                target="_blank"
                rel="noopener"
                className="group block"
              >
                <Image
                  src={review.image}
                  alt={`Ritaglio stampa: recensione di «${review.show}»`}
                  width={review.width}
                  height={review.height}
                  loading={index < 3 ? "eager" : undefined}
                  sizes="(min-width: 768px) 310px, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full border border-black/10 bg-white shadow-sm transition-shadow group-hover:shadow-md"
                />
                <span className="mt-3 block font-display text-sm font-bold uppercase text-cocoa group-hover:text-brand">
                  {review.show}
                </span>
                <span className="block text-sm text-menu">{review.source}</span>
                <span className="mt-1 block text-sm font-bold text-amber-dark">
                  PDF <span aria-hidden="true">↗</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
