import React from "react";
import { DATA } from "../data";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="w-full py-16 md:py-20 bg-sweep bg-[length:200%_200%] animate-sweep" style={{contentVisibility:"auto"}}>
      <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="skills-heading" className="text-3xl sm:text-4xl font-extrabold mb-6 sm:mb-8">Skills</h2>
        <ul role="list" className="flex flex-wrap gap-2.5">
          {DATA.skills.map((s) => (
            <li key={s} className="rounded-xl border border-black/10 bg-white/90 backdrop-blur px-3.5 py-1.5 text-[15.5px]">
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
