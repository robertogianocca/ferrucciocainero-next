import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Backend", template: "%s – Backend" },
  robots: { index: false, follow: false },
};

// The backend reads the session cookie and the latest content on every request, so its
// layout and pages opt out of instant-navigation validation (`instant = false`).
export const instant = false;

export default function AdminLayout({ children }: LayoutProps<"/admin">) {
  return <div className="min-h-screen bg-white">{children}</div>;
}
