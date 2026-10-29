import Image from "next/image";
import DownloadButton from "@/components/DownloadButton";
import PageTitle from "@/components/PageTitle";
import { Container, Row, Separator } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "VeranstalterBox",
  description:
    "Material für Veranstalter: Präsentationstexte, Plakate, Flyer, Fotos und technische Rider zu den aktuellen Stücken von Ferruccio Cainero.",
  path: "/veranstalterbox/",
});

const base = "/downloads/veranstalterbox";

function DownloadGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h3 className="font-display text-sm font-bold uppercase tracking-wide">{title}</h3>
      <div className="flex flex-col items-start gap-2">{children}</div>
    </div>
  );
}

export default function VeranstalterBoxPage() {
  return (
    <>
      <PageTitle>VeranstalterBox</PageTitle>
      <Container>
        <Row>
          <div className="prose-fc font-bold md:col-span-6" lang="de">
            <p>Liebe VeranstalterInnen,</p>
            <p>
              in der Box finden Sie alle Informationen zu den aktuellen Stücken, wie
              Präsentationstexte, grafisches Material für Flyer, Social Media und Plakate, Fotos und
              den technischen Rider. Alles kann frei benutzt und zusammengestellt werden.
            </p>
            <p>Bei Fragen zögern Sie bitte nicht, sich an mich zu wenden.</p>
            <p>Wir freuen uns, dass Sie Ferruccio Cainero wieder einmal in Ihr Theater eingeladen haben.</p>
            <p>Bis bald!</p>
          </div>
          <div className="prose-fc font-bold md:col-span-6">
            <p>Cari organizzatori,</p>
            <p>
              in questa pagina troverete tutte le informazioni sugli spettacoli attuali: testi di
              presentazione, dati tecnici, fotografie e materiale grafico per volantini, social media
              e poster. Tutto può essere usato liberamente.
            </p>
            <p>In caso di domande, non esitate a contattarmi.</p>
            <p>Siamo lieti che abbiate nuovamente invitato Ferruccio Cainero al vostro teatro.</p>
            <p>Arrivederci!</p>
          </div>
        </Row>

        <Separator />

        <section lang="de" aria-labelledby="box-regentropfen">
          <h2 id="box-regentropfen" className="mb-6 text-xl font-bold md:text-2xl">
            Zwischen den Regentropfen
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            <DownloadGroup title="Plakate & Flyer">
              <Image
                src="/images/shows/zwischen-den-regentropfen.jpeg"
                alt="Plakat «Zwischen den Regentropfen»"
                width={451}
                height={640}
                sizes="150px"
                className="h-auto w-[150px] shadow-sm"
              />
              <DownloadButton href={`${base}/zwischen-den-regentropfen-plakate-flyer.zip`} meta="ZIP, 15 MB">
                Plakate & Flyer
              </DownloadButton>
            </DownloadGroup>
            <DownloadGroup title="Beschreibungen">
              <DownloadButton href={`${base}/zwischen-den-regentropfen-beschreibung.docx`} meta="DOCX">
                Beschreibungen
              </DownloadButton>
            </DownloadGroup>
            <DownloadGroup title="Technische Anweisungen">
              <DownloadButton
                href={`${base}/zwischen-den-regentropfen-technische-anweisungen.docx`}
                meta="DOCX"
              >
                Technische Anweisungen
              </DownloadButton>
            </DownloadGroup>
          </div>
        </section>

        <Separator />

        <section lang="de" aria-labelledby="box-sokrates">
          <h2 id="box-sokrates" className="mb-6 text-xl font-bold md:text-2xl">
            Von Sokrates bis Putin
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            <DownloadGroup title="Plakate & Flyer">
              <Image
                src="/images/veranstalterbox/von-sokrates-bis-putin-plakat.jpg"
                alt="Plakat «Von Sokrates bis Putin – 2500 Jahre Geschichte in 80 Minuten»"
                width={1571}
                height={2191}
                sizes="150px"
                className="h-auto w-[150px] shadow-sm"
              />
              <DownloadButton href={`${base}/von-sokrates-bis-putin-plakate-flyer.zip`} meta="ZIP, 4.6 MB">
                Plakate & Flyer
              </DownloadButton>
            </DownloadGroup>
            <DownloadGroup title="Fotos">
              <DownloadButton
                href={`${base}/von-sokrates-bis-putin-foto-markus-froemml.zip`}
                meta="ZIP, 9 MB"
              >
                Fotos von Markus Froemml
              </DownloadButton>
              <DownloadButton
                href={`${base}/von-sokrates-bis-putin-foto-daniela-domestici.zip`}
                meta="ZIP, 2.5 MB"
              >
                Fotos von Daniela Domestici
              </DownloadButton>
            </DownloadGroup>
            <DownloadGroup title="Beschreibungen & Technik">
              <DownloadButton href={`${base}/von-sokrates-bis-putin-beschreibung.zip`} meta="ZIP">
                Beschreibungen
              </DownloadButton>
              <DownloadButton href={`${base}/von-sokrates-bis-putin-technischer-rider.pdf`} meta="PDF">
                Technischer Rider
              </DownloadButton>
            </DownloadGroup>
          </div>
        </section>
      </Container>
    </>
  );
}
