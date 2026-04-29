type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  tone?: "default" | "inverse";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  const titleClass = tone === "inverse" ? "text-white" : "text-fg";
  const bodyClass = tone === "inverse" ? "text-white/72" : "text-fg/72";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="text-base font-semibold uppercase tracking-[0.2em] text-accent sm:text-[1.05rem]">
        {eyebrow}
      </p>
      <h2 className={`mt-4 font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl ${titleClass}`}>
        {title}
      </h2>
      <p className={`mt-5 text-lg leading-8 ${bodyClass}`}>{description}</p>
    </div>
  );
}
