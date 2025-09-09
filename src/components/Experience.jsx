import React from "react";
import { DATA } from "../data";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-heading" className="w-full py-16 md:py-20" style={{contentVisibility:"auto"}}>
      <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="exp-heading" className="text-3xl sm:text-4xl font-extrabold mb-8 sm:mb-10" style={{color:"#0ea5e9"}}>Experience</h2>

        <div className="relative">
          {/* timeline line only on md+ */}
          <div className="hidden md:block absolute left-4 top-0 bottom-0 w-px bg-black/10" />
          <div className="space-y-6 sm:space-y-8">
            {DATA.experience.map((job, idx) => (
              <motion.article
                key={job.company + idx}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="relative flex md:gap-4"
              >
                {/* dot only on md+ */}
                <div className="hidden md:block relative mt-3 ml-[6px] h-3.5 w-3.5 rounded-full bg-brand" />
                <div className="flex-1 md:ml-2 rounded-2xl border border-black/10 bg-white/90 backdrop-blur p-5 md:p-6 lg:p-7 shadow-soft">
                  <div className="flex items-start gap-3">
                    {job.logo && <img src={job.logo} alt={job.company} className="h-7 w-7 sm:h-8 sm:w-8 object-contain rounded-sm" loading="lazy" />}
                    <div>
                      <div className="flex flex-wrap items-baseline gap-2">
                        <h3 className="text-[1.05rem] sm:text-lg md:text-xl font-semibold">{job.role}</h3>
                        <span className="text-[15px] sm:text-[15.5px] text-black/70">{job.company}</span>

                        {job.location && (
                          <>
                            <span aria-hidden className="mx-2 inline-block h-[2px] w-3 md:w-4 rounded-full bg-black/30 align-middle" />
                            <span className="text-[14.5px] sm:text-[15px] text-black/60">{job.location}</span>
                          </>
                        )}
                      </div>
                      <div className="text-[14px] sm:text-[15px] text-black/60">{job.period}</div>
                    </div>
                  </div>
                  <ul className="mt-3 space-y-1.5 sm:space-y-2">
                    {job.points.map((p, i) => (
                      <li key={i} className="text-[15px] sm:text-[15.5px] md:text-base text-black/85 leading-[1.7]">• {p}</li>
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
