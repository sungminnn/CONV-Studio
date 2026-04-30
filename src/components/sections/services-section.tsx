import { CtaButton } from "@/components/ui/cta-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { ctaLinks, serviceColumns } from "@/lib/site-data";

export function ServicesSection() {
  return (
    <section id="services" className="px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="서비스"
          title="성과가 필요한 두 고객군에 맞춘 전환 구조."
          description="CONV-Studio는 문의를 늘려야 하는 비즈니스와 빠르게 신뢰를 만들어야 하는 캠페인 팀, 두 가지 상황에 맞춰 설계됩니다."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {serviceColumns.map((column) => (
            <article key={column.audience} className="flex h-full flex-col rounded-[2rem] border border-border bg-white p-8 shadow-card sm:p-10">
              <p className="text-base font-semibold uppercase tracking-[0.16em] text-accent">
                {column.audience}
              </p>
              <h3 className="mt-6 font-heading text-4xl font-semibold leading-tight tracking-tight text-fg">
                {column.title}
              </h3>
              <p className="mt-5 text-base leading-8 text-fg/72">{column.description}</p>
              <ul className="mt-8 space-y-3 text-base leading-7 text-fg/78">
                {column.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="text-cta">+</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <CtaButton href={ctaLinks.consultation}>{column.ctaLabel}</CtaButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
