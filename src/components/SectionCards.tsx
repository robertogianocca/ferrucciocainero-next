import Image from "next/image";
import Link from "next/link";

export type SectionCard = {
  href: string;
  title: string;
  text: string;
  image: { src: string; width: number; height: number; alt: string };
};

/** Overview grid used by the section landing pages (Attività, Media). */
export default function SectionCards({ cards }: { cards: SectionCard[] }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {cards.map((card) => (
        <li key={card.href}>
          <Link href={card.href} className="group block h-full bg-white shadow-sm transition-shadow hover:shadow-md">
            <div className="relative aspect-[3/2] overflow-hidden bg-black">
              <Image
                src={card.image.src}
                alt={card.image.alt}
                fill
                loading="eager"
                sizes="(min-width: 768px) 320px, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="border-t-[3px] border-brand p-4">
              <h2 className="font-display text-base font-bold uppercase tracking-wide group-hover:text-brand">
                {card.title}
              </h2>
              <p className="mt-1 text-[15px]">{card.text}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
