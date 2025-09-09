import React from "react";
import { DATA } from "../data";
import { Mail } from "lucide-react";

export default function Contact(){
  return (
    <section id="contact" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="p-6 border rounded-2xl flex items-center gap-6">
          <img src="/Passport_size_1.jpg" alt="portrait" className="w-20 h-20 object-cover rounded-lg" />
          <div>
            <h3 className="text-xl font-semibold">Let's build something reliable & fast.</h3>
            <p className="text-sm text-black/70 mt-1">Open to collaborations and roles in frontend, AEM, and ML infra.</p>
            <div className="mt-4 flex gap-3">
              <a href={`mailto:${DATA.email}`} className="px-4 py-2 bg-black text-white rounded-xl inline-flex items-center gap-2"><Mail size={14}/> {DATA.email}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}