import React from "react";
import { DATA } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="w-full py-20 bg-sweep bg-[length:200%_200%] animate-sweep">
      <div className="max-w-wide mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-8">Skills</h2>
        <div className="flex flex-wrap gap-2.5">
          {DATA.skills.map((s) => (
            <span
              key={s}
              className="rounded-xl border border-black/10 bg-white/90 backdrop-blur px-3.5 py-1.5 text-base"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
