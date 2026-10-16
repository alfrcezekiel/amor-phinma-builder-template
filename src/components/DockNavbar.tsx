"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { scrollToSection } from "@/lib/utils/scroll";

export function DockNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollToSection = (sectionId: string) => {
    setIsOpen(false);
    scrollToSection(sectionId);
  };

  const navLinks = [
    { id: "explore", label: "Home" },
    { id: "about", label: "About" },
    { id: "features", label: "Features" },
    { id: "categories", label: "Explore" },
  ];

  return (
    <>
      {isOpen && (
        <>
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-40 sm:hidden"
          />
          <div className="fixed inset-0 z-50 sm:hidden">
            <div className="h-full bg-teal-900/95 backdrop-blur-xl p-6 flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <Logo width={140} height={46} />
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-white/80 transition-colors text-2xl"
                >
                  ✕
                </button>
              </div>
              <div className="flex flex-col gap-4 text-lg font-medium text-white">
                {navLinks.map((link) => (
                  <span
                    key={link.id}
                    onClick={() => handleScrollToSection(link.id)}
                    className="cursor-pointer hover:text-white/80 py-3 transition-colors duration-200 border-b border-white/10 last:border-0"
                  >
                    {link.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      <nav className={`fixed top-4 left-1/2 z-50 -translate-x-1/2 rounded-2xl px-4 py-2 sm:px-8 sm:py-3 shadow-2xl bg-teal-900/95 backdrop-blur-xl border border-white/25 w-[calc(100%-2rem)] sm:w-auto sm:min-w-96 md:min-w-md ${isOpen ? 'hidden sm:flex' : 'flex'}`}>
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="hover:opacity-80 transition-opacity mr-8 sm:mr-12">
            <Logo width={140} height={46} />
          </Link>
          <div className="flex items-center gap-2 sm:gap-4 text-xs font-medium text-white/90 sm:text-sm">
            {navLinks.map((link) => (
              <span
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="cursor-pointer hover:text-white hidden sm:inline transition-colors duration-200"
              >
                {link.label}
              </span>
            ))}
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden flex flex-col gap-1.5 p-2 cursor-pointer group"
          >
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </nav>
    </>
  );
}
