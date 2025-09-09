import React from "react";

export default function Header({ name }) {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#home" className="font-semibold text-lg">{name}</a>
        <nav className="hidden md:flex gap-6">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
}