"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { NavItem } from "@/data/site";

const normalize = (path: string) => path.replace(/\/+$/, "") || "/";

function isCurrent(pathname: string, href: string) {
  return normalize(pathname) === normalize(href);
}

function isInSection(pathname: string, item: NavItem): boolean {
  const path = normalize(pathname);
  const href = normalize(item.href);
  if (href === "/") return path === "/";
  if (path === href || path.startsWith(`${href}/`)) return true;
  return item.children?.some((child) => isInSection(pathname, child)) ?? false;
}

export default function Navigation({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav aria-label="Menu principale">
      {/* Desktop */}
      <ul className="hidden items-center lg:flex">
        {items.map((item) => {
          const active = isInSection(pathname, item);
          return (
            <li key={item.href} className="group relative">
              <Link
                href={item.href}
                aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
                aria-haspopup={item.children ? "true" : undefined}
                className={`block px-3 py-5 font-display text-[13px] uppercase transition-colors hover:text-cocoa ${
                  active ? "text-cocoa" : "text-menu"
                }`}
              >
                {item.label}
              </Link>
              {item.children && (
                <ul className="invisible absolute left-0 top-full min-w-[220px] translate-y-1 border-t-2 border-brand bg-white py-1 opacity-0 shadow-lg transition group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => {
                    const current = isCurrent(pathname, child.href);
                    return (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          aria-current={current ? "page" : undefined}
                          className={`block px-4 py-2.5 font-display text-[13px] uppercase transition-colors hover:bg-paper hover:text-cocoa ${
                            current ? "text-cocoa" : "text-menu"
                          }`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>

      {/* Mobile */}
      <button
        type="button"
        className="-mr-2 flex h-11 w-11 items-center justify-center text-cocoa lg:hidden"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Chiudi il menu" : "Apri il menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          aria-hidden="true"
        >
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M3 6h18M3 12h18M3 18h18" />
          )}
        </svg>
      </button>

      <div
        id="mobile-menu"
        hidden={!open}
        onKeyDown={(event) => event.key === "Escape" && close()}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-black/5 bg-paper shadow-lg lg:hidden"
      >
        <ul className="px-4 py-2">
          {items.map((item) => (
            <li key={item.href} className="border-b border-black/5 last:border-b-0">
              <Link
                href={item.href}
                onClick={close}
                aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
                className={`block py-3 font-display text-sm uppercase ${
                  isInSection(pathname, item) ? "text-cocoa" : "text-menu"
                }`}
              >
                {item.label}
              </Link>
              {item.children && (
                <ul className="pb-2 pl-4">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        onClick={close}
                        aria-current={isCurrent(pathname, child.href) ? "page" : undefined}
                        className={`block py-2 font-display text-[13px] uppercase ${
                          isCurrent(pathname, child.href) ? "text-cocoa" : "text-menu"
                        }`}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
