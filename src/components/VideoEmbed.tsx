type VideoEmbedProps = {
  provider: "youtube" | "vimeo";
  id: string;
  title: string;
  /** Start offset in seconds (YouTube only). */
  start?: number;
  aspect?: "16/9" | "4/3";
};

function embedUrl({ provider, id, start }: VideoEmbedProps) {
  if (provider === "vimeo") return `https://player.vimeo.com/video/${id}?dnt=1`;
  const params = new URLSearchParams({ rel: "0" });
  if (start) params.set("start", String(start));
  return `https://www.youtube-nocookie.com/embed/${id}?${params}`;
}

/** Lazy-loaded, privacy-friendly video embed (no-cookie YouTube, Vimeo "do not track"). */
export default function VideoEmbed(props: VideoEmbedProps) {
  const { title, aspect = "16/9" } = props;
  return (
    <div
      className="relative w-full overflow-hidden bg-black"
      style={{ aspectRatio: aspect }}
    >
      <iframe
        src={embedUrl(props)}
        title={title}
        loading="lazy"
        allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
        referrerPolicy="strict-origin-when-cross-origin"
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}
