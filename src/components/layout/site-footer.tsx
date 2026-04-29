import Link from "next/link";

import { ctaLinks, navigationItems } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-fg px-5 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-content gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="font-heading text-xl font-semibold tracking-tight">
            CONV Studio
          </p>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/68">
            문의가 생기는 홈페이지를 만듭니다. 더 높은 신뢰, 더 명확한 동선,
            더 나은 전환을 위한 디지털 스튜디오입니다.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/52">
              메뉴
            </p>
            <div className="mt-4 space-y-3 text-sm text-white/78">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <Link href={item.href} className="block hover:text-white">
                    {item.label}
                  </Link>
                  {item.children ? (
                    <div className="mt-2 space-y-2 pl-3 text-white/58">
                      {item.children.map((child) => (
                        <Link key={child.label} href={child.href} className="block hover:text-white">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/52">
              문의
            </p>
            <div className="mt-4 space-y-3 text-sm text-white/78">
              <Link href={ctaLinks.consultation} className="block hover:text-white">
                카카오톡 상담
              </Link>
              <Link href={ctaLinks.inquiry} className="block hover:text-white">
                문의 폼
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
