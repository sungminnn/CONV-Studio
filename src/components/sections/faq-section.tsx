import { SectionHeading } from "@/components/ui/section-heading";
import { faqItems } from "@/lib/site-data";

export function FaqSection() {
  return (
    <section id="faq" className="px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="자주 묻는 질문"
          title="이탈 이유가 되기 전에 주요 질문부터 정리합니다."
          description="제작 기간, 모바일 완성도, 상담 연결, 확장 가능성처럼 마지막 hesitation을 줄이는 내용을 담습니다."
        />
        <div className="mt-12 grid gap-5">
          {faqItems.map((item) => (
            <article key={item.question} className="rounded-[2rem] border border-border bg-white p-7 shadow-card">
              <h3 className="font-heading text-[2rem] font-semibold leading-tight tracking-tight text-fg">
                {item.question}
              </h3>
              <p className="mt-5 max-w-3xl text-base leading-8 text-fg/72">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
