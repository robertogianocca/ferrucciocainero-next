import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { navigation, site } from "@/data/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/85">
      <div className="flex h-16 items-center justify-between px-4 md:px-5">
        <Link href="/" className="shrink-0" aria-label={`${site.name} – Home`}>
          <Image
            src="/images/logo.png"
            alt={site.name}
            width={500}
            height={57}
            preload
            className="h-auto w-[170px] sm:w-[200px]"
          />
        </Link>
        <Navigation items={navigation} />
      </div>
    </header>
  );
}
