"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/blog" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On non-home pages always show the solid nav
  const isHome = pathname === "/";
  const solid = scrolled || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        solid
          ? "bg-[#0b1220] border-b border-white/10"
          : "bg-transparent border-b border-white/10"
      }`}
    >
      <div className="max-w-[1600px] mx-auto flex items-stretch">

        {/* Logo block */}
        <div
          className={`shrink-0 flex items-center px-8 lg:px-14 border-r transition-colors duration-400 ${
            solid ? "border-white/10" : "border-white/20"
          }`}
          style={{ paddingTop: "28px", paddingBottom: "28px" }}
        >
          <Link href="/" onClick={() => setOpen(false)} className="flex flex-col leading-tight">
            <span className="text-white font-black text-xl tracking-widest uppercase">Watershed</span>
            <span className="text-[#0076B6] text-[10px] tracking-[0.3em] uppercase font-semibold mt-0.5">
              Development Group
            </span>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-stretch flex-1 justify-end">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{ paddingTop: "38px", paddingBottom: "38px" }}
                className={`relative px-6 lg:px-8 flex items-center text-[13px] font-semibold tracking-[0.15em] uppercase transition-colors duration-200 group ${
                  active ? "text-[#0076B6]" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                {/* Animated underline — Honolulu Blue */}
                <span
                  className={`absolute bottom-0 left-0 h-[3px] bg-[#0076B6] transition-all duration-300 ease-in-out ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}

          {/* CTA — text with underline, no filled box */}
          <Link
            href="/contact"
            style={{ paddingTop: "38px", paddingBottom: "38px" }}
            className="relative px-8 lg:px-12 flex items-center text-[13px] font-bold tracking-[0.15em] uppercase text-white hover:text-white group border-l border-white/10"
          >
            Start a Project
            <span className="absolute bottom-0 left-0 h-[3px] bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out" />
          </Link>
        </nav>

        {/* Mobile toggle */}
        <div className="md:hidden ml-auto flex items-center pr-6">
          <button
            className="text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0b1220] border-t border-white/10 px-8 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-sm font-semibold tracking-[0.15em] uppercase ${
                pathname === link.href ? "text-[#0076B6]" : "text-white/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 text-sm font-bold tracking-[0.15em] uppercase text-white border-t border-white/10 pt-6"
          >
            Start a Project →
          </Link>
        </div>
      )}
    </header>
  );
}
