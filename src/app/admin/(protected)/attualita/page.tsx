import type { Metadata } from "next";
import AttualitaEditor from "@/components/admin/AttualitaEditor";
import SavedDialog from "@/components/admin/SavedDialog";
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
      {salvato && <SavedDialog title="Modifica salvata" />}
      <h1 className="mb-2 font-display text-3xl font-semibold">Attualità</h1>
      <p className="mb-8 text-lg text-menu">Il testo che appare in home page, sotto la foto.</p>
      <AttualitaEditor key={sha} attualita={data} sha={sha} />
    </>
  );
}
