import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-coal px-4 py-6 text-center font-display text-[13px] leading-relaxed text-white/70">
      <p>
        <span className="text-white">© {site.name}</span>
        <span aria-hidden="true"> · </span>
        <a href={`mailto:${site.email}`} className="underline-offset-2 hover:text-white hover:underline">
          {site.email}
        </a>
      </p>
      <p>
        Info &amp; Booking:{" "}
        <Link href="/contact/" className="underline-offset-2 hover:text-white hover:underline">
          {site.agency.name} – {site.agency.description}
        </Link>
      </p>
    </footer>
  );
}
