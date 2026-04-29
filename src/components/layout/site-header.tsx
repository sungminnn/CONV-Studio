"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { navigationItems } from "@/lib/site-data";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition duration-300 ${
        isScrolled
          ? "border-b border-border bg-white/92 backdrop-blur"
          : "bg-white/80 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between gap-8 px-6 py-5 sm:px-8 sm:py-6 lg:px-10">
        <Link href="/" className="font-heading text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
          CONV Studio
        </Link>
        <nav className="hidden items-center gap-9 text-lg font-medium text-fg/72 lg:flex">
          {navigationItems.map((item) => (
            item.children ? (
              <div key={item.label} className="group relative">
                <Link href={item.href} className="transition hover:text-fg">
                  {item.label}
                </Link>
                <div className="pointer-events-none absolute left-0 top-full z-20 pt-4 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                  <div className="min-w-[18rem] rounded-3xl border border-border bg-white p-3 shadow-card">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block rounded-2xl px-4 py-3.5 text-base text-fg/76 transition hover:bg-muted hover:text-fg"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={item.label} href={item.href} className="transition hover:text-fg">
                {item.label}
              </Link>
            )
          ))}
        </nav>
      </div>
    </header>
  );
}
