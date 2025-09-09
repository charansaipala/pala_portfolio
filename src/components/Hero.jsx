import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { DATA } from "../data";

export default function Hero() {
  return (
    <section id="home" className="py-14">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[160px,1fr] items-center gap-8">
        <motion.img src="/Passport_size_1.jpg" alt="portrait" className="rounded-2xl w-40 h-40 object-cover shadow-lg" initial={{opacity:0}} animate={{opacity:1}} />
        <div>
          <h1 className="text-4xl font-extrabold">{DATA.title}</h1>
          <p className="mt-3 text-lg text-black/80 max-w-xl">{DATA.summary}</p>
          <div className="mt-4 flex gap-3">
            <a href={DATA.links.github} className="px-4 py-2 bg-black text-white rounded-xl inline-flex items-center gap-2"><Github size={16} /> Github</a>
            <a href={DATA.links.linkedin} className="px-4 py-2 bg-black text-white rounded-xl inline-flex items-center gap-2"><Linkedin size={16} /> LinkedIn</a>
            <a href={`mailto:${DATA.email}`} className="px-4 py-2 bg-black text-white rounded-xl inline-flex items-center gap-2"><Mail size={16} /> Email</a>
          </div>
        </div>
      </div>
    </section>
  );
}