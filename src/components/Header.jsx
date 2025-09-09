import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/10">
      <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold text-base md:text-lg">
          Charan Sai Pala
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden md:flex gap-6">
          <a href="#home" className="text-sm md:text-base text-black/70 hover:text-black">Home</a>
          <a href="#experience" className="text-sm md:text-base text-black/70 hover:text-black">Experience</a>
          <a href="#skills" className="text-sm md:text-base text-black/70 hover:text-black">Skills</a>
          <a href="#contact" className="text-sm md:text-base text-black/70 hover:text-black">Contact</a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-xl px-3 py-2 border border-black/10"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden border-t border-black/10 bg-white">
          <nav className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col gap-2" aria-label="Mobile">
            <a onClick={() => setOpen(false)} href="#home" className="py-2 text-base">Home</a>
            <a onClick={() => setOpen(false)} href="#experience" className="py-2 text-base">Experience</a>
            <a onClick={() => setOpen(false)} href="#skills" className="py-2 text-base">Skills</a>
            <a onClick={() => setOpen(false)} href="#contact" className="py-2 text-base">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}
