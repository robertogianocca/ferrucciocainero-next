export const site = {
  name: "Ferruccio Cainero",
  url: "https://www.ferrucciocainero.ch",
  tagline: "Attore, narratore, autore e regista",
  description:
    "Ferruccio Cainero – attore, narratore, autore e regista. Spettacoli di narrazione, regie e radiodrammi in italiano e tedesco: calendario, podcast, foto, video e materiale per organizzatori.",
  email: "info@ferrucciocainero.ch",
  ogImage: {
    url: "/images/hero/ferruccio-cainero-hero.jpeg",
    width: 830,
    height: 467,
    alt: "Ferruccio Cainero in scena, con la mano sulla fronte",
  },
  agency: {
    name: "ArteCultura",
    description: "Künstleragentur für Musik und Kleinkunst",
    contact: "Anina Fromm Lopez",
    street: "Stationsstrasse 14",
    city: "CH-7206 Igis",
    phone: { label: "+41 81 322 25 19", href: "tel:+41813222519" },
    mobile: { label: "+41 76 375 82 55", href: "tel:+41763758255" },
    email: "office@artecultura.ch",
    website: "https://www.artecultura.ch",
    languages: "Deutsch, Italienisch, Spanisch",
  },
} as const;

/**
 * Hosting for the podcast MP3s (≈50 MB each). They are still served by the
 * WordPress media library: move them to a CDN/storage bucket and update this
 * base URL before the old site is switched off.
 */
export const mediaBaseUrl = "https://www.ferrucciocainero.ch/wp-content/uploads";

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Calendario", href: "/calendario/" },
  { label: "Podcast", href: "/podcast/" },
  {
    label: "Attività",
    href: "/attivita/",
    children: [
      { label: "Teatro / Theater", href: "/attivita/teatro/" },
      { label: "Regia / Regie", href: "/attivita/regia-regie/" },
      { label: "Radio", href: "/attivita/radio/" },
    ],
  },
  {
    label: "Bio",
    href: "/biography/",
    children: [
      { label: "Premi / Auszeichnungen", href: "/premi/" },
      { label: "Recensioni", href: "/biography/recensioni/" },
    ],
  },
  {
    label: "Media",
    href: "/media/",
    children: [
      { label: "Foto", href: "/media/foto/" },
      { label: "Video", href: "/media/video/" },
    ],
  },
  { label: "VeranstalterBox", href: "/veranstalterbox/" },
  { label: "Contact", href: "/contact/" },
];
