import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { DATA } from "../data";
import CanvasEnergy from "./CanvasEnergy";

const fadeUp = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } };

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden">
      <CanvasEnergy />
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 max-w-wide mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-[220px,1fr] items-center gap-10">
          <motion.img
            src="/Passport_size_1.jpg"
            alt="portrait"
            className="rounded-2xl w-48 h-48 object-cover ring-2 ring-white/40 shadow-soft"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          <div className="text-white">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.45 }}
              className="text-5xl md:text-6xl font-extrabold leading-tight"
            >
              Building fast, elegant, reliable software.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mt-4 text-xl md:text-2xl text-white/90 max-w-3xl"
            >
              {DATA.summary}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.16 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <a href={DATA.links.github} className="btn"><Github size={18}/> GitHub</a>
              <a href={DATA.links.linkedin} className="btn"><Linkedin size={18}/> LinkedIn</a>
              <a href={`mailto:${DATA.email}`} className="btn-ghost bg-white/10 text-white hover:bg-white hover:text-black">
                <Mail size={18}/> {DATA.email}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
