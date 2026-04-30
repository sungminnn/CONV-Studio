import Image from "next/image";

import { CtaButton } from "@/components/ui/cta-button";
import { ctaLinks } from "@/lib/site-data";

export function FloatingKakaoButton() {
  return (
    <div className="fixed bottom-5 left-5 right-5 z-50 max-w-[calc(100vw-2.5rem)] sm:bottom-6 sm:left-auto sm:right-6 sm:max-w-none">
      <CtaButton href={ctaLinks.consultation} className="flex w-full justify-center px-5 py-4 sm:w-auto">
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
  );
}
