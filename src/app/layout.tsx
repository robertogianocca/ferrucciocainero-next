import type { Metadata, Viewport } from "next";
import { Open_Sans, Quicksand } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { site } from "@/data/site";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} – ${site.tagline}`,
    template: `%s – ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "it_CH",
    alternateLocale: ["de_CH"],
    url: "/",
    title: `${site.name} – ${site.tagline}`,
    description: site.description,
    images: [site.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} – ${site.tagline}`,
    description: site.description,
    images: [site.ogImage.url],
  },
};

export const viewport: Viewport = {
  themeColor: "#1b2019",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="it"
      className={`${quicksand.variable} ${openSans.variable} antialiased`}
    >
      <body className="bg-night">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-paper focus:px-4 focus:py-2 focus:font-bold focus:text-cocoa"
        >
          Vai al contenuto
        </a>
        <div className="mx-auto flex max-w-[1024px] flex-col bg-paper md:my-5">
          <Header />
          <main id="content" className="flex-1 pb-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
