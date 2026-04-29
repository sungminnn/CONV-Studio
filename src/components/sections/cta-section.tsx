import { CtaButton } from "@/components/ui/cta-button";
import { ctaLinks } from "@/lib/site-data";

export function CtaSection() {
  return (
    <section
      className="px-5 pb-24 pt-8 sm:px-6 sm:pb-28 lg:px-8"
    >
      <div className="mx-auto grid max-w-content gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2.25rem] bg-fg px-8 py-12 text-white shadow-card sm:px-12 sm:py-14">
          <p className="text-base font-semibold uppercase tracking-[0.18em] text-accent">
            최종 CTA
          </p>
          <h2 className="mt-5 max-w-3xl font-heading text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
            실제 문의가 생기는 홈페이지를 시작할 준비가 되셨나요?
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
            가장 빠른 상담은 카카오톡으로 시작하시면 됩니다. 목표와 일정이 어느
            정도 정리되어 있다면 문의 폼으로 남겨주셔도 됩니다.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <CtaButton href={ctaLinks.consultation}>카카오톡으로 시작</CtaButton>
            <CtaButton href={ctaLinks.inquiry} variant="ghost">
              문의 남기기
            </CtaButton>
          </div>
        </div>
        <div
          id="inquiry-form"
          className="rounded-[2.25rem] border border-border bg-white p-8 shadow-card sm:p-10"
        >
          <p className="text-base font-semibold uppercase tracking-[0.16em] text-accent">
            문의 폼
          </p>
          <form className="mt-8 grid gap-4">
            <label className="grid gap-2 text-base font-medium text-fg">
              이름
              <input
                type="text"
                placeholder="성함을 입력해주세요"
                className="min-h-14 rounded-2xl border border-border px-4 text-base outline-none transition focus:border-fg"
              />
            </label>
            <label className="grid gap-2 text-base font-medium text-fg">
              이메일
              <input
                type="email"
                placeholder="example@email.com"
                className="min-h-14 rounded-2xl border border-border px-4 text-base outline-none transition focus:border-fg"
              />
            </label>
            <label className="grid gap-2 text-base font-medium text-fg">
              프로젝트 유형
              <select className="min-h-14 rounded-2xl border border-border px-4 text-base outline-none transition focus:border-fg">
                <option>소상공인 / 비즈니스 홈페이지</option>
                <option>캠페인 랜딩 페이지</option>
                <option>기타 전환형 프로젝트</option>
              </select>
            </label>
            <label className="grid gap-2 text-base font-medium text-fg">
              상세 내용
              <textarea
                rows={5}
                placeholder="목표, 일정, 원하는 문의 유형을 간단히 적어주세요."
                className="rounded-2xl border border-border px-4 py-3.5 text-base outline-none transition focus:border-fg"
              />
            </label>
            <CtaButton href={ctaLinks.consultation} className="w-full">
              상담으로 제출하기
            </CtaButton>
          </form>
        </div>
      </div>
    </section>
  );
}
