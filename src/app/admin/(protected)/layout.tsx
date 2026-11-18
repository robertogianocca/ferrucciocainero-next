import Link from "next/link";
import AdminNav from "@/components/admin/AdminNav";
import { requireUser } from "@/lib/auth";
import { logout } from "../actions";

export const instant = false;

export default async function ProtectedLayout({ children }: LayoutProps<"/admin">) {
  const user = await requireUser();

  return (
    <>
      <header className="border-b border-black/10">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3">
          <AdminNav />
          <div className="flex items-center gap-4 text-sm text-menu">
            <Link href="/" target="_blank" className="hover:text-brand">
              Vedi sito ↗
            </Link>
            <span>{user.name}</span>
            <form action={logout}>
              <button className="underline underline-offset-2 hover:text-brand">Esci</button>
            </form>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-8">{children}</main>
    </>
  );
}
