import { SectionHeading } from "@/components/ui/section-heading";
import { problemCards } from "@/lib/site-data";

export function ProblemSection() {
  return (
    <section className="px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="문제"
          title="많은 홈페이지는 완성돼 보이지만, 대부분 성과로의 전환은 만들어내지 못합니다."
          description="문제는 단순히 디자인이 아닙니다. 메시지가 약하고, 신뢰 흐름이 없고, 방문자가 다음 행동을 할 이유가 부족한 경우가 많습니다."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {problemCards.map((card) => (
            <article key={card.title} className="rounded-[2rem] border border-border bg-white p-8 shadow-card">
              <h3 className="font-heading text-[2rem] font-semibold leading-tight tracking-tight text-fg">
                {card.title}
              </h3>
              <p className="mt-5 text-base leading-8 text-fg/72">{card.description}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-xl font-medium leading-9 text-fg">
          홈페이지는 존재만 하는 것이 아니라, 문의를 만드는 도구여야 합니다.
        </p>
      </div>
    </section>
  );
}
