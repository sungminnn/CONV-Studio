import { ResultCard } from "@/components/ui/result-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { resultCards } from "@/lib/site-data";

export function ResultsSection() {
  return (
    <section id="results" className="px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="성과"
          title="포트폴리오보다 중요한 것은 결과입니다."
          description="이 섹션은 예쁜 썸네일보다 비즈니스 변화에 집중합니다. 무엇이 바뀌었고, 왜 중요했고, 어떤 성과를 만들었는지를 보여줍니다."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {resultCards.map((result) => (
            <ResultCard key={result.metric} {...result} />
          ))}
        </div>
      </div>
    </section>
  );
}
