import React from "react";
import { DATA } from "../data";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="w-full py-20">
      <div className="max-w-wide mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-10" style={{ color: "#0ea5e9" }}>Experience</h2>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-black/10" />
          <div className="space-y-8">
            {DATA.experience.map((job, idx) => (
              <motion.article
                key={job.company + idx}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="relative flex gap-4"
              >
                <div className="relative mt-3 ml-[6px] h-3.5 w-3.5 rounded-full bg-brand" />
                <div className="flex-1 ml-2 rounded-2xl border border-black/10 bg-white/90 backdrop-blur p-6 md:p-7 shadow-soft">
                  <div className="flex items-start gap-3">
                    {job.logo && <img src={job.logo} alt={job.company} className="h-8 w-8 object-contain rounded-sm" loading="lazy" />}
                    <div>
                      <div className="flex flex-wrap items-baseline gap-2">
                        <h3 className="text-lg md:text-xl font-semibold">{job.role}</h3>
                        <span className="text-[15.5px] text-black/70">{job.company}</span>

                        {job.location && (
                          <>
                            {/* tiny thin dash (2px tall, very short) */}
                            <span
                              aria-hidden
                              className="mx-2 inline-block h-[2px] w-3 md:w-4 rounded-full bg-black/30 align-middle"
                            />
                            <span className="text-[15px] text-black/60">{job.location}</span>
                          </>
                        )}
                      </div>

                      <div className="text-[15px] text-black/60">{job.period}</div>
                    </div>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {job.points.map((p, i) => (
                      <li key={i} className="text-[15.5px] md:text-base text-black/85 leading-[1.75]">• {p}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
