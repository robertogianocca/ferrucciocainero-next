import { redirect } from "next/navigation";
import { requireUser } from "@/lib/auth";

export const instant = false;

export default async function AdminHome() {
  await requireUser();
  redirect("/admin/calendario/");
}
