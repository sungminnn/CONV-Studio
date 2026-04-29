import { PricingCard } from "@/components/ui/pricing-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { pricingTiers } from "@/lib/site-data";

export function PricingSection() {
  return (
    <section id="pricing" className="bg-muted px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="가격"
          title="진지한 문의를 빠르게 구분할 수 있는 패키지 구성."
          description="항목을 과하게 나열하기보다, 고객이 자신의 상황에 맞는 범위를 빠르게 이해할 수 있도록 방향을 제시합니다."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>
      </div>
    </section>
  );
}
