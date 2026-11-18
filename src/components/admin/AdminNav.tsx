"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/admin/calendario/", label: "Calendario" },
  { href: "/admin/attualita/", label: "Attualità" },
];

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Backend" className="flex gap-5 font-display text-[15px] font-semibold">
      {links.map(({ href, label }) => {
        const current = pathname.startsWith(href.slice(0, -1));
        return (
          <Link
            key={href}
            href={href}
            aria-current={current ? "page" : undefined}
            className={`border-b-2 py-1 ${current ? "border-brand text-cocoa" : "border-transparent text-menu hover:text-brand"}`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
