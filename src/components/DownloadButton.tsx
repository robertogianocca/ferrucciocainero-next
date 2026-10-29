type DownloadButtonProps = {
  href: string;
  children: React.ReactNode;
  /** Short file info shown next to the label, e.g. "ZIP, 15 MB". */
  meta?: string;
};

/** Amber download button (".download-button" on the original site). */
export default function DownloadButton({ href, children, meta }: DownloadButtonProps) {
  return (
    <a
      href={href}
      download
      className="inline-flex items-center gap-2 bg-amber px-4 py-2 text-[15px] font-bold text-cocoa no-underline transition-colors hover:bg-cocoa hover:text-white"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
      </svg>
      <span>
        {children}
        {meta && <span className="ml-1 font-medium opacity-80">({meta})</span>}
      </span>
    </a>
  );
}
