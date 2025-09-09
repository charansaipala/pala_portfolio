import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/10">
      <div className="max-w-wide mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold">Charan Sai Pala</a>
        <nav className="hidden md:flex gap-6">
          <a href="#home" className="text-[15.5px] md:text-base text-black/70 hover:text-black">Home</a>
          <a href="#experience" className="text-[15.5px] md:text-base text-black/70 hover:text-black">Experience</a>
          <a href="#skills" className="text-[15.5px] md:text-base text-black/70 hover:text-black">Skills</a>
          <a href="#contact" className="text-[15.5px] md:text-base text-black/70 hover:text-black">Contact</a>
        </nav>

      </div>
    </header>
  );
}