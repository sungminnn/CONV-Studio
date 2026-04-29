import type { Metadata } from "next";
import { ReactNode } from "react";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "CONV Studio | 문의가 생기는 홈페이지",
  description:
    "CONV Studio는 신뢰를 만들고 문의를 유도하는 전환 중심 웹사이트를 설계하고 제작합니다.",
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
      <body className="bg-bg text-fg">
        {children}
      </body>
    </html>
  );
}
