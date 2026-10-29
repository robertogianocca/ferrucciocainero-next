import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Section";
import { site } from "@/data/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  image: `${site.url}${site.ogImage.url}`,
  jobTitle: ["Attore", "Narratore", "Autore", "Regista"],
  email: `mailto:${site.email}`,
  award: [
    "Wilhelmshavener Knurrhahn (2008)",
    "The Golden Ear of Graz (2006)",
    "Salzburger Stier (2003)",
    "Schweizer Kleinkunstpreis (2002)",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <h1 className="sr-only">
        {site.name} – {site.tagline}
      </h1>

      <div className="flex justify-center bg-black">
        <Image
          src={site.ogImage.url}
          alt={site.ogImage.alt}
          width={site.ogImage.width}
          height={site.ogImage.height}
          preload
          sizes="(min-width: 1024px) 712px, 100vw"
          className="h-auto w-full md:h-[400px] md:w-auto"
        />
      </div>

      <Container className="pt-8">
        <article className="border-b-[3px] border-brand pb-6">
          <p className="flex items-center gap-1.5 text-sm text-menu">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
            <time dateTime="2024-07-09">9 luglio 2024</time>
          </p>
          <h2 className="mt-2 text-[22px] font-light md:text-[26px]">
            <Link href="/attualita/" className="hover:text-brand">
              Attualità
            </Link>
          </h2>
          <p className="mt-3 text-[15px] md:text-base">
            Cioè quello che sto facendo ora.{" "}
            <Link
              href="/attualita/"
              className="font-bold text-amber-dark underline decoration-amber decoration-2 underline-offset-[3px] hover:text-brand"
            >
              Clicca su attualità
            </Link>
          </p>
        </article>
      </Container>
    </>
  );
}
