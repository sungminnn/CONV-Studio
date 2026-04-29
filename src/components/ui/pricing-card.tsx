import { Badge } from "@/components/ui/badge";
import { CtaButton } from "@/components/ui/cta-button";
import { ctaLinks } from "@/lib/site-data";

type PricingCardProps = {
  name: string;
  tagline: string;
  price: string;
  features: readonly string[];
  featured?: boolean;
};

export function PricingCard({
  name,
  tagline,
  price,
  features,
  featured = false,
}: PricingCardProps) {
  return (
    <article
      className={`flex h-full flex-col rounded-[2rem] border p-8 ${
        featured
          ? "border-fg bg-fg text-white shadow-card"
          : "border-border bg-white text-fg"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-heading text-2xl font-semibold tracking-tight">
            {name}
          </h3>
          <p
            className={`mt-3 text-base leading-7 ${
              featured ? "text-white/72" : "text-fg/68"
            }`}
          >
            {tagline}
          </p>
        </div>
        {featured ? <Badge tone="accent">추천</Badge> : null}
      </div>
      <p className="mt-8 text-xl font-semibold tracking-tight">{price}</p>
      <ul
        className={`mt-8 space-y-3 text-base leading-7 ${
          featured ? "text-white/82" : "text-fg/76"
        }`}
      >
        {features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <span className={featured ? "text-accent" : "text-cta"}>+</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <CtaButton
          href={ctaLinks.consultation}
          variant={featured ? "primary" : "secondary"}
          className="w-full"
        >
          무료 상담
        </CtaButton>
      </div>
    </article>
  );
}
