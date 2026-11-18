import Link from "next/link";
import PageTitle from "@/components/PageTitle";
import { Container } from "@/components/Section";
import SiteShell from "@/components/SiteShell";

export default function NotFound() {
  return (
    <SiteShell>
      <PageTitle>Pagina non trovata</PageTitle>
      <Container className="prose-fc">
        <p>
          La pagina che cercate non esiste o è stata spostata.{" "}
          <span lang="de">Die gesuchte Seite existiert nicht oder wurde verschoben.</span>
        </p>
        <p>
          <Link href="/">Torna alla home</Link>
          {" · "}
          <Link href="/calendario/">Calendario</Link>
          {" · "}
          <Link href="/contact/">Contact</Link>
        </p>
      </Container>
    </SiteShell>
  );
}
