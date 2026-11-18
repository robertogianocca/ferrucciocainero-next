import type { Metadata } from "next";
import { redirect } from "next/navigation";
import LoginForm from "@/components/admin/LoginForm";
import { getUser } from "@/lib/auth";

export const instant = false;

export const metadata: Metadata = { title: "Accesso" };

export default async function LoginPage() {
  if (await getUser()) redirect("/admin/calendario/");

  return (
    <main className="mx-auto max-w-sm px-4 py-16">
      <h1 className="font-display text-2xl font-semibold">Ferruccio Cainero</h1>
      <p className="mb-8 text-lg text-menu">Backend del sito</p>
      <LoginForm />
    </main>
  );
}
