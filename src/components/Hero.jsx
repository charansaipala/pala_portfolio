import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { DATA } from "../data";
import CanvasEnergy from "./CanvasEnergy";

const fadeUp = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } };

export default function Hero() {
  return (
    // svh avoids mobile browser chrome height issues
    <section id="home" className="relative min-h-[75svh] md:min-h-[80vh] w-full overflow-hidden">
      <CanvasEnergy />
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 max-w-wide mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid items-center gap-8 md:gap-10 lg:gap-12 md:grid-cols-[220px,1fr]">
          <motion.img
            src="/Passport_size_1.jpg"
            alt="portrait"
            className="rounded-2xl w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover ring-2 ring-white/40 shadow-soft"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="text-white">
            {/* fluid heading: clamp(min, vw, max) */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.45 }}
              className="font-extrabold leading-tight text-[clamp(2rem,5vw,3.5rem)]"
            >
              Building fast, elegant, reliable software.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mt-3 sm:mt-4 text-[clamp(1rem,2.4vw,1.35rem)] text-white/90 max-w-3xl"
            >
              {DATA.summary}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.16 }}
              className="mt-5 sm:mt-7 flex flex-wrap gap-3"
            >
              <a href={DATA.links.github} className="btn"><span aria-hidden="true"><Github size={18}/></span> GitHub</a>
              <a href={DATA.links.linkedin} className="btn"><span aria-hidden="true"><Linkedin size={18}/></span> LinkedIn</a>
              <a href={`mailto:${DATA.email}`} className="btn-ghost bg-white/10 text-white hover:bg-white hover:text-black">
                <span aria-hidden="true"><Mail size={18}/></span> {DATA.email}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
