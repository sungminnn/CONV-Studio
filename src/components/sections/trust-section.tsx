import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { trustPoints } from "@/lib/site-data";

export function TrustSection() {
  return (
    <section className="bg-fg px-5 py-20 text-white sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto grid max-w-content gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <SectionHeading
          eyebrow="왜 CONV인가"
          title="프리미엄 구조, 군더더기 없는 화면, 성과 중심 실행."
          description="신뢰는 화려함보다 명확함에서 나옵니다. 첫 화면부터 마지막 CTA까지 정돈되고 통제된 인상을 주는 것이 중요합니다."
          tone="inverse"
        />
        <div className="grid gap-4">
          {trustPoints.map((point) => (
            <div key={point} className="rounded-[1.75rem] border border-white/10 bg-white/6 p-6">
              <Badge tone="accent">신뢰 포인트</Badge>
              <p className="mt-4 text-base leading-7 text-white/82">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
