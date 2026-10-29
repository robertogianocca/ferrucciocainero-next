/** Blue title band shown at the top of every inner page (BeTheme "Subheader"). */
export default function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 bg-brand px-4 py-8 text-center md:py-10">
      <h1 className="font-display text-[19px] font-semibold uppercase leading-tight tracking-[2px] text-white md:text-[25px]">
        {children}
      </h1>
    </div>
  );
}
