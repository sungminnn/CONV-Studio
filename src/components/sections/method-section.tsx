import { SectionHeading } from "@/components/ui/section-heading";
import { methodSteps } from "@/lib/site-data";

export function MethodSection() {
  return (
    <section id="method" className="bg-muted px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="CONV 방식"
          title="전략부터 런칭까지, 전환을 기준으로 움직이는 제작 프로세스."
          description="이 사이트는 예쁜 화면보다 먼저 세일즈 자산으로 설계됩니다. 디자인과 개발은 그 전환 논리를 따라갑니다."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {methodSteps.map((step) => (
            <article key={step.step} className="rounded-[2rem] border border-border bg-white p-7">
              <p className="text-base font-semibold uppercase tracking-[0.16em] text-accent">
                {step.step}
              </p>
              <h3 className="mt-6 font-heading text-[2rem] font-semibold leading-tight tracking-tight text-fg">
                {step.title}
              </h3>
              <p className="mt-5 text-base leading-8 text-fg/72">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
