import PageTitle from "@/components/PageTitle";
import { Container, Row } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Premi / Auszeichnungen",
  description:
    "Premi nazionali e internazionali di Ferruccio Cainero: Wilhelmshavener Knurrhahn, The Golden Ear of Graz, Salzburger Stier, Schweizer Kleinkunstpreis.",
  path: "/premi/",
});

const awards = [
  {
    year: "2008",
    it: "Premio tedesco per il cabaret Wilhelmshavener Knurrhahn",
    de: "Deutscher Kleinkunstpreis Wilhelmshavener Knurrhahn",
  },
  {
    year: "2006",
    it: "Premio internazionale di narrazione The Golden Ear of Graz",
    de: "Internationaler Erzählkunstpreis The Golden Ear of Graz",
  },
  {
    year: "2003",
    it: "Premio internazionale per il cabaret Salzburger Stier",
    de: "Internationaler Kabarettpreis Salzburger Stier",
  },
  { year: "2002", it: "Schweizer Kleinkunstpreis", de: "Schweizer Kleinkunstpreis" },
];

function AwardList({ lang }: { lang: "it" | "de" }) {
  return (
    <ul className="space-y-3 !pl-0 !list-none">
      {awards.map((award) => (
        <li key={award.year} className="flex gap-4">
          <span className="w-12 shrink-0 font-display font-bold text-brand">{award.year}</span>
          <span>{award[lang]}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PremiPage() {
  return (
    <>
      <PageTitle>Premi / Auszeichnungen</PageTitle>
      <Container>
        <Row>
          <div className="prose-fc md:col-span-6">
            <h2>Alcuni riconoscimenti nazionali e internazionali</h2>
            <AwardList lang="it" />
          </div>
          <div className="prose-fc md:col-span-6" lang="de">
            <h2>Einige nationale und internationale Auszeichnungen</h2>
            <AwardList lang="de" />
          </div>
        </Row>
      </Container>
    </>
  );
}
