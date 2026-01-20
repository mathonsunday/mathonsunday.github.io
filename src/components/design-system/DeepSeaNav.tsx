"use client";

import Link from "next/link";

export function DeepSeaNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-[rgba(2,8,16,0.95)] backdrop-blur-lg border-b border-[rgba(77,208,225,0.2)] px-8 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="glow-text text-2xl font-semibold tracking-[0.15em] hover:text-[#4dd0e1] transition-colors duration-500"
          >
            Nerdonica
          </Link>

          <div className="flex gap-8">
            <NavLink href="/posts">Posts</NavLink>
            <NavLink href="/about">About</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="text-[#e4e4e7] hover:text-[#4dd0e1] transition-colors duration-300 relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4dd0e1] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </Link>
  );
}
