import React from "react";
import { DATA } from "../data";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">Experience</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {DATA.experience.map((job) => (
            <motion.div key={job.company} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.45}} className="p-5 border rounded-2xl">
              <div className="flex items-baseline gap-3">
                <h3 className="font-semibold">{job.role}</h3>
                <span className="text-sm text-black/70">• {job.company}</span>
              </div>
              <div className="text-sm text-black/60">{job.period}</div>
              <ul className="mt-3 space-y-1">
                {job.points.map((p, i) => <li key={i} className="list-disc ml-5 text-sm">{p}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}