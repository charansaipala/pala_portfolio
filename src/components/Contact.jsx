import React from "react";
import { DATA } from "../data";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-20 bg-sweep bg-[length:200%_200%] animate-sweep">
      <div className="max-w-wide mx-auto px-6">
        <div className="rounded-2xl bg-white/90 backdrop-blur p-7 md:p-8 shadow-soft flex flex-col md:flex-row items-center gap-6">
          <img src="/Passport_size_1.jpg" alt="portrait" className="w-24 h-24 object-cover rounded-xl ring-2 ring-white/70" />
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold">Let’s build something reliable & fast.</h3>
            <p className="text-base text-black/70 mt-2">Open to collaborations and roles in frontend, AEM, and ML infra.</p>
            <div className="mt-5">
              <a href={`mailto:${DATA.email}`} className="btn"><Mail size={18}/> {DATA.email}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
