import Footer from "@/components/Footer";
import Header from "@/components/Header";

/** Header, main content and footer of the public site (the backend has its own layout). */
export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
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
    </>
  );
}
