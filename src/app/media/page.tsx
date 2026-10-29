import PageTitle from "@/components/PageTitle";
import { Container } from "@/components/Section";
import SectionCards from "@/components/SectionCards";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Media",
  description: "Foto e video di Ferruccio Cainero – Fotos und Videos.",
  path: "/media/",
});

export default function MediaPage() {
  return (
    <>
      <PageTitle>Media</PageTitle>
      <Container>
        <SectionCards
          cards={[
            {
              href: "/media/foto/",
              title: "Foto",
              text: "Foto di scena e ritratti da scaricare.",
              image: {
                src: "/images/photos/kudin-kav-9390.jpeg",
                width: 640,
                height: 427,
                alt: "Ferruccio Cainero racconta al microfono",
              },
            },
            {
              href: "/media/video/",
              title: "Video",
              text: "Trailer e spettacoli integrali.",
              image: {
                src: "/images/photos/20240915-ferruccio-cainero-007.jpeg",
                width: 640,
                height: 427,
                alt: "Ferruccio Cainero sul palco",
              },
            },
          ]}
        />
      </Container>
    </>
  );
}
