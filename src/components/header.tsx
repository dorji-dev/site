"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="py-8 sticky top-0 bg-background z-50 backdrop-blur-sm">
      <nav className="flex items-center gap-4">
        <Link
          href="/"
          className="text-xs font-bold text-muted-foreground hover:text-primary hover-translate transition-all duration-200"
        >
          JOURNEY
        </Link>
        <Link
          href="/blog"
          className="text-xs font-bold text-muted-foreground hover:text-primary hover-translate transition-all duration-200"
        >
          BLOG
        </Link>
      </nav>
    </header>
  );
}
