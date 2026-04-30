import Image from "next/image";
import Link from "next/link";

import { CtaButton } from "@/components/ui/cta-button";
import { ctaLinks } from "@/lib/site-data";

export function FloatingKakaoButton() {
  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 sm:hidden">
        <Link
          href={ctaLinks.consultation}
          aria-label="카카오톡 상담"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fee500] shadow-card transition hover:scale-[1.03]"
        >
          <Image
            src="/images/kakaotalk.png"
            alt=""
            width={28}
            height={28}
            className="h-8 w-8"
          />
        </Link>
      </div>
      <div className="fixed bottom-6 right-6 z-50 hidden sm:block">
        <CtaButton href={ctaLinks.consultation} className="flex justify-center px-5 py-4">
          <span className="flex items-center gap-2">
            <Image
              src="/images/kakaotalk.png"
              alt="카카오톡"
              width={28}
              height={28}
              className="h-11 w-11"
            />
            <span>카카오톡 상담</span>
          </span>
        </CtaButton>
      </div>
    </>
  );
}
