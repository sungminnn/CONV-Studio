import type { Metadata } from "next";
import { ReactNode } from "react";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "CONV-Studio | 문의가 생기는 홈페이지",
  description:
    "CONV-Studio는 신뢰를 만들고 문의를 유도하는 전환 중심 웹사이트를 설계하고 제작합니다.",
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link
          rel="preload"
          as="font"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/woff2/PretendardVariable.woff2"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          as="font"
          href="https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff"
          type="font/woff"
          crossOrigin=""
        />
        <link
          rel="preload"
          as="font"
          href="https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff"
          type="font/woff"
          crossOrigin=""
        />
      </head>
      <body className="bg-bg text-fg">
        {children}
      </body>
    </html>
  );
}
