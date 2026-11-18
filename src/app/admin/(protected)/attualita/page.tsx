import type { Metadata } from "next";
import AttualitaEditor from "@/components/admin/AttualitaEditor";
import { noticeClass } from "@/components/admin/ui";
import { requireUser } from "@/lib/auth";
import { readContent } from "@/lib/content-store";
import type { Attualita } from "@/lib/rich-text";

export const instant = false;

export const metadata: Metadata = { title: "Attualità" };

export default async function AdminAttualitaPage({ searchParams }: PageProps<"/admin/attualita">) {
  await requireUser();
  const { salvato } = await searchParams;
  const { data, sha } = await readContent<Attualita>("content/attualita.json");

  return (
    <>
      <h1 className="mb-2 font-display text-2xl font-semibold">Attualità</h1>
      <p className="mb-6 text-sm text-menu">Il testo che appare in home page, sotto la foto.</p>
      {salvato && (
        <p role="status" className={`${noticeClass} mb-6`}>
          Salvato. Il sito si aggiorna entro 1–2 minuti.
        </p>
      )}
      <AttualitaEditor key={sha} attualita={data} sha={sha} />
    </>
  );
}
