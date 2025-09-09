import React from "react";
import { DATA } from "../data";

export default function Skills(){
  return (
    <section id="skills" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {DATA.skills.map(s => <div key={s} className="p-3 border rounded-lg text-sm text-black">{s}</div>)}
        </div>
      </div>
    </section>
  );
}