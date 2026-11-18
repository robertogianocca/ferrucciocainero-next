"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { buttonClass } from "./ui";

/** Confirmation shown after a save or delete, closed with «OK». */
export default function SavedDialog({ title }: { title: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    dialog.current?.showModal();
  }, []);

  return (
    <dialog
      ref={dialog}
      aria-labelledby="saved-title"
      // Drop ?salvato=1 from the address so the panel doesn't come back on reload
      onClose={() => router.replace(pathname, { scroll: false })}
      className="m-auto w-[min(28rem,calc(100%-2rem))] rounded-lg bg-white p-8 text-center shadow-xl backdrop:bg-black/50"
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
        className="mx-auto mb-4 text-green-700"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m7.5 12.5 3 3 6-6.5" />
      </svg>
      <h2 id="saved-title" className="font-display text-2xl font-semibold">
        {title}
      </h2>
      <p className="mt-3 text-lg">Il sito pubblico si aggiorna entro 1–2 minuti.</p>
      <form method="dialog" className="mt-7">
        <button autoFocus className={buttonClass}>
          OK
        </button>
      </form>
    </dialog>
  );
}
