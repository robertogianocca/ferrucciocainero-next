type SectionProps = {
  children: React.ReactNode;
  className?: string;
  /** Language of the block when it differs from the page (e.g. German copy). */
  lang?: string;
  id?: string;
};

/** Horizontal content gutter used by every page. */
export function Container({ children, className = "" }: SectionProps) {
  return <div className={`px-4 md:px-5 ${className}`}>{children}</div>;
}

/** 12-column row that stacks on mobile, like the WPBakery rows of the original site. */
export function Row({ children, className = "", lang, id }: SectionProps) {
  return (
    <section
      id={id}
      lang={lang}
      className={`grid scroll-mt-24 gap-x-8 gap-y-6 md:grid-cols-12 ${className}`}
    >
      {children}
    </section>
  );
}

/** Thick blue rule between sections. */
export function Separator() {
  return <hr className="my-8 border-0 border-t-[5px] border-brand md:my-10" />;
}
