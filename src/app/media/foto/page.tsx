import Image from "next/image";
import PageTitle from "@/components/PageTitle";
import { Container } from "@/components/Section";
import { photos } from "@/data/media";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Foto",
  description:
    "Foto di scena e ritratti di Ferruccio Cainero da scaricare per stampa e organizzatori – Pressefotos zum Herunterladen.",
  path: "/media/foto/",
});

export default function FotoPage() {
  return (
    <>
      <PageTitle>Foto</PageTitle>
      <Container>
        <ul className="grid gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
          {photos.map((photo, index) => (
            <li key={photo.src}>
              <figure>
                <div className="relative aspect-[3/2] bg-black">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    loading={index < 3 ? "eager" : undefined}
                    sizes="(min-width: 768px) 320px, (min-width: 640px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
                <figcaption className="mt-2 flex items-center justify-between gap-3 text-sm">
                  <span className="text-menu">{photo.credit && `Foto: ${photo.credit}`}</span>
                  <a
                    href={photo.download ?? photo.src}
                    download
                    className="inline-flex items-center gap-1.5 bg-amber px-3 py-1.5 font-bold text-cocoa transition-colors hover:bg-cocoa hover:text-white"
                  >
                    Download
                    <span className="sr-only">
                      {" "}
                      – {photo.alt} ({photo.width}×{photo.height} px)
                    </span>
                  </a>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
