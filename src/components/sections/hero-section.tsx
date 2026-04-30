import Image from "next/image";

import { CtaButton } from "@/components/ui/cta-button";
import { ctaLinks, heroMetrics, methodSteps } from "@/lib/site-data";

export function HeroSection() {
  const highlightStrokeStyle = {
    backgroundColor: "rgba(30, 127, 240, 0.88)",
    clipPath: "polygon(3% 0, 100% 0, 97% 100%, 0 100%)",
  } as const;

  const heroIcons = [
    <svg
      key="seo"
      viewBox="0 0 24 24"
      fill="none"
      className="h-10 w-10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 17A6.5 6.5 0 1 0 10.5 4a6.5 6.5 0 0 0 0 13Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M15.5 15.5L20 20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8 10.5h5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8 13h3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>,
    <svg
      key="mobile"
      viewBox="0 0 24 24"
      fill="none"
      className="h-10 w-10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="7" y="2.75" width="10" height="18.5" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10 6h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="17.5" r="1" fill="currentColor" />
    </svg>,
    <svg
      key="chat"
      viewBox="0 0 24 24"
      fill="none"
      className="h-10 w-10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 7.75A3.75 3.75 0 0 1 8.75 4h6.5A3.75 3.75 0 0 1 19 7.75v4.5A3.75 3.75 0 0 1 15.25 16H11l-4 3v-3.25A3.75 3.75 0 0 1 5 12.25v-4.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M9 9.75h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 12.25h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>,
    <svg
      key="speed"
      viewBox="0 0 24 24"
      fill="none"
      className="h-10 w-10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 14a7 7 0 1 1 14 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 14l3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M7 18h10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>,
  ];

  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_left,rgba(0,181,226,0.16),transparent_35%),radial-gradient(circle_at_top_right,rgba(230,30,43,0.12),transparent_32%)]" />
      <div className="absolute inset-0 -z-10 bg-hero-grid bg-[size:36px_36px] [mask-image:linear-gradient(to_bottom,white,transparent_78%)]" />
      <div className="mx-auto grid max-w-content gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-4 rounded-[1.5rem] border border-fg/10 bg-white px-5 py-4 shadow-card">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-fg text-sm font-semibold text-white">
              CONV
            </div>
            <div>
              <p className="text-xl font-semibold tracking-tight text-fg">
                전환 중심 디지털 스튜디오
              </p>
              <p className="mt-1 text-sm text-fg/58">
                성과를 만드는 홈페이지 설계와 제작
              </p>
            </div>
          </div>
          <h1 className="mt-8 font-heading text-6xl font-semibold leading-[1.02] tracking-[-0.04em] text-fg sm:text-7xl lg:text-[5.5rem]">
            <span className="sm:hidden">
              <span className="relative block w-fit">
                <span className="relative z-10">문의가</span>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-[-0.08em] top-[58%] z-0 h-[0.52em] -translate-y-1/2"
                  style={highlightStrokeStyle}
                />
              </span>
              <span className="relative mt-1 block w-fit">
                <span className="relative z-10">생기는</span>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-[-0.08em] top-[58%] z-0 h-[0.52em] -translate-y-1/2"
                  style={highlightStrokeStyle}
                />
              </span>
              <span className="relative mt-1 block w-fit">
                <span className="relative z-10">홈페이지.</span>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-[-0.08em] top-[58%] z-0 h-[0.52em] -translate-y-1/2"
                  style={highlightStrokeStyle}
                />
              </span>
            </span>
            <span className="hidden sm:inline">
              <span className="relative inline-block">
                <span className="relative z-10">문의가 생기는</span>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-[-0.08em] top-[58%] z-0 h-[0.52em] -translate-y-1/2"
                  style={highlightStrokeStyle}
                />
              </span>
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">홈페이지.</span>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-[-0.08em] top-[58%] z-0 h-[0.52em] -translate-y-1/2"
                  style={highlightStrokeStyle}
                />
              </span>
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-fg/72 sm:text-2xl">
            방문자를 고객으로 바꾸는 성과 중심 웹사이트를 설계하고 제작합니다.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {heroMetrics.map((metric, index) => (
              <article
                key={metric}
                className="flex items-center gap-4 rounded-[1.5rem] border border-border bg-white px-5 py-4 shadow-card"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-fg text-white">
                  {heroIcons[index]}
                </div>
                <p className="text-lg font-semibold tracking-tight text-fg">
                  {metric}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div className="flex h-full flex-col rounded-[2rem] border border-border bg-fg p-8 text-white shadow-card sm:p-10">
          <p className="text-base font-semibold uppercase tracking-[0.16em] text-accent">
            성과 중심 설계
          </p>
          <div className="mt-7 space-y-6">
            <div>
              <p className="text-5xl font-semibold tracking-tight">4단계</p>
              <p className="mt-2 text-base leading-7 text-white/68">
                전략, 제작, 최적화를 전환 기준으로 설계합니다.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {methodSteps.map((step) => (
                <article
                  key={step.step}
                  className="rounded-3xl border border-white/12 bg-white/6 p-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-fg">
                    {step.step}
                  </div>
                  <p className="mt-3 text-lg font-semibold tracking-tight text-white">
                    {step.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/68">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
