import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="w-full">
        <Hero />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-black/60">
        © {new Date().getFullYear()} Charan Sai Pala
      </footer>
    </div>
  );
}