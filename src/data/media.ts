export type Photo = {
  src: string;
  /** Full-resolution file offered for download (defaults to `src`). */
  download?: string;
  width: number;
  height: number;
  alt: string;
  credit?: string;
};

export const photos: Photo[] = [
  {
    src: "/images/photos/20240915-ferruccio-cainero-020.jpeg",
    width: 640,
    height: 427,
    alt: "Ferruccio Cainero in camicia viola, in primo piano mentre racconta sul palco",
  },
  {
    src: "/images/photos/20240915-ferruccio-cainero-007.jpeg",
    width: 640,
    height: 427,
    alt: "Ferruccio Cainero sul palco con le mani incrociate sul petto",
  },
  {
    src: "/images/photos/20240915-ferruccio-cainero-003-1.jpeg",
    width: 640,
    height: 427,
    alt: "Ferruccio Cainero gesticola sul palco buio",
  },
  {
    src: "/images/photos/kudin-kav-9364-2.jpeg",
    width: 640,
    height: 427,
    alt: "Ferruccio Cainero al microfono accanto a Luca Domenicali con la chitarra",
    credit: "@kudin_photo",
  },
  {
    src: "/images/photos/kudin-kav-9390.jpeg",
    width: 640,
    height: 427,
    alt: "Ferruccio Cainero racconta al microfono, con la mano tesa verso il pubblico",
    credit: "@kudin_photo",
  },
  {
    src: "/images/photos/kudin-kav-9400.jpeg",
    width: 640,
    height: 427,
    alt: "Ferruccio Cainero mette un cappello da Babbo Natale a Luca Domenicali che suona la chitarra",
    credit: "@kudin_photo",
  },
  {
    src: "/images/photos/kudin-kav-9439.jpeg",
    width: 427,
    height: 640,
    alt: "Ferruccio Cainero e Luca Domenicali abbracciati sul palco, con chitarra e microfono",
    credit: "@kudin_photo",
  },
  {
    src: "/images/photos/ferruccio-cainero-media-03.jpg",
    width: 1800,
    height: 1200,
    alt: "Ritratto di Ferruccio Cainero davanti a un muro giallo",
  },
  {
    src: "/images/photos/ferruccio-cainero-media-01.jpg",
    width: 1800,
    height: 1200,
    alt: "Ritratto sorridente di Ferruccio Cainero in polo blu",
  },
  {
    src: "/images/photos/ferruccio-cainero-media-02.jpg",
    width: 1800,
    height: 1200,
    alt: "Ferruccio Cainero guarda verso l’alto, ritratto davanti a un muro di pietra",
  },
  {
    src: "/images/photos/fff-1844.jpeg",
    width: 640,
    height: 459,
    alt: "Ferruccio Cainero racconta davanti a un muro di mattoni con un arco",
  },
  {
    src: "/images/photos/fff-1895.jpeg",
    width: 457,
    height: 640,
    alt: "Ferruccio Cainero in piedi durante una narrazione all’aperto",
  },
  {
    src: "/images/photos/ferruccio-cainero-media-04.jpg",
    width: 640,
    height: 480,
    alt: "Ferruccio Cainero in bianco e nero, con berretto, in una smorfia teatrale",
  },
];

export type Video = {
  provider: "youtube" | "vimeo";
  id: string;
  title: string;
  /** Rendered with line breaks where the original had them. */
  heading?: string[];
  details?: string[];
  start?: number;
  aspect?: "16/9" | "4/3";
  lang?: "it" | "de";
};

export const videos: Video[] = [
  { provider: "vimeo", id: "1124955396", title: "Zwischen den Regentropfen", lang: "de" },
  {
    provider: "vimeo",
    id: "937288064",
    title: "Von Sokrates bis Putin",
    details: ["(20 Minuten, Schweizer Kleinkunstbörse 2024)"],
    lang: "de",
  },
  { provider: "youtube", id: "o03knFNADUs", title: "Da Socrate a Putin", details: ["Spettacolo integrale"] },
  { provider: "youtube", id: "ClirJREcKV4", title: "Leise rieselt es nicht", details: ["Trailer"], lang: "de" },
  { provider: "youtube", id: "RRPXuve_g0Y", title: "Acqua", details: ["Trailer"] },
  {
    provider: "youtube",
    id: "sGY_qJE7_e4",
    title: "Kolumbus und die Schmetterlinge",
    heading: ["Kolumbus und", "die Schmetterlinge"],
    details: ["Trailer"],
    lang: "de",
  },
  {
    provider: "youtube",
    id: "Rg_MN3VBi_s",
    title: "Cristoforo Colombo e le farfalle",
    heading: ["Cristoforo Colombo", "e le farfalle"],
    details: ["Trailer"],
  },
  {
    provider: "youtube",
    id: "rJ0xmWFXYoI",
    start: 859,
    title: "Tic Tac",
    details: ["Kurzauftritt", "Schweizer Künstlerbörse 2019", "Schadausaal Thun"],
    lang: "de",
  },
  {
    provider: "youtube",
    id: "INjQdA-_Zhg",
    start: 7,
    title: "L’arco di San Marco",
    details: ["Spettacolo integrale"],
  },
  { provider: "youtube", id: "kWYn_xA1YxY", start: 7, title: "Motorroller", aspect: "4/3", lang: "de" },
];
