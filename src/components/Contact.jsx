import React from "react";
import { DATA } from "../data";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-16 md:py-20 bg-sweep bg-[length:200%_200%] animate-sweep">
      <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white/90 backdrop-blur p-5 sm:p-7 md:p-8 shadow-soft flex flex-col md:flex-row items-center gap-5 md:gap-6">
          <img src="/Passport_size_1.jpg" alt="portrait" className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl ring-2 ring-white/70" />
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">Let’s build something reliable & fast.</h3>
            <p className="text-sm sm:text-base text-black/70 mt-2">Open to collaborations and roles in frontend, AEM, and ML infra.</p>
            <div className="mt-4">
              <a href={`mailto:${DATA.email}`} className="btn"><Mail size={18}/> {DATA.email}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
