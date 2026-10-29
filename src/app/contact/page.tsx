import PageTitle from "@/components/PageTitle";
import { Container, Row } from "@/components/Section";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Info & Booking per Ferruccio Cainero: agenzia ArteCultura (Igis) – Künstleragentur für Musik und Kleinkunst – oppure info@ferrucciocainero.ch.",
  path: "/contact/",
});

export default function ContactPage() {
  const { agency } = site;
  return (
    <>
      <PageTitle>Contact</PageTitle>
      <Container>
        <Row>
          <address className="prose-fc not-italic md:col-span-6" lang="de">
            <h2>Info &amp; Booking</h2>
            <p>
              <strong>{agency.name}</strong>
              <br />
              <strong>{agency.description}</strong>
            </p>
            <p>
              {agency.contact}
              <br />
              {agency.street}
              <br />
              {agency.city}
            </p>
            <p>
              Tel.: <a href={agency.phone.href}>{agency.phone.label}</a>
              <br />
              Mobile: <a href={agency.mobile.href}>{agency.mobile.label}</a>
            </p>
            <p>
              <a href={`mailto:${agency.email}`}>{agency.email}</a>
              <br />
              <a href={agency.website} target="_blank" rel="noopener noreferrer">
                www.artecultura.ch
              </a>
            </p>
            <p className="text-sm">Sprachen / Lingue: {agency.languages}</p>
          </address>
          <address className="prose-fc not-italic md:col-span-6">
            <h2>Ferruccio Cainero</h2>
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </address>
        </Row>
      </Container>
    </>
  );
}
