import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { DATA } from "./data";

export default function App(){
  return (
    <div className="min-h-screen bg-white text-black">
      <Header name={DATA.name}/>
      <main>
        <Hero/>
        <Experience/>
        <Skills/>
        <Contact/>
      </main>
      <footer className="py-6 text-center text-sm text-black/60">© {new Date().getFullYear()} {DATA.name}</footer>
    </div>
  );
}