import React from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-[#1e293b] dark:bg-[#0f172a] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* --- هيدر السيكشن (أنيميشن النقطتين الثابت معانا) --- */}
        <div className="relative group cursor-pointer mb-20">
          <span className="absolute -left-12 top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full transition-all duration-500 ease-in-out group-hover:left-0 group-hover:w-1/2 group-hover:h-full group-hover:rounded-none z-0"></span>
          <span className="absolute -right-12 top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full transition-all duration-500 ease-in-out group-hover:right-0 group-hover:w-1/2 group-hover:h-full group-hover:rounded-none z-0"></span>

          <div className="relative w-48 h-16 border-2 border-blue-500 flex items-center justify-center overflow-hidden z-10 pointer-events-none">
            <h2 className="text-2xl font-bold text-blue-500 group-hover:text-white transition-colors duration-500">
              Contact
            </h2>
          </div>
        </div>

        {/* --- محتوى الـ Contact (مفصول لعمودين في الشاشات الكبيرة) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-5xl">
          {/* العمود الأول: معلومات التواصل */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-extrabold text-white mb-4">
              Let's work together!
            </h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              I’m currently available to take on new projects. Whether you have
              a question, a project idea, or just want to say hi, my inbox is
              always open.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/50 border border-slate-700/50 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="text-white font-medium">
                    youssefelshemy55@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/50 border border-slate-700/50 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="text-white font-medium">
                    Badr City, Cairo, Egypt
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/50 border border-slate-700/50 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="text-white font-medium">+20 1069110100</p>{" "}
                  {/* حط رقمك هنا */}
                </div>
              </div>
            </div>
          </div>

          {/* العمود الثاني: الفورم */}
          {/* غير الـ action باللينك اللي هتاخده من Formspree */}
          <form
            action="https://formspree.io/f/mkoppabv"
            method="POST"
            className="bg-slate-800/40 dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-700/50 shadow-lg flex flex-col gap-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-[#1e293b] dark:bg-[#0f172a] border border-slate-700 rounded-xl focus:outline-none focus:border-blue-500 text-white transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-[#1e293b] dark:bg-[#0f172a] border border-slate-700 rounded-xl focus:outline-none focus:border-blue-500 text-white transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full px-4 py-3 bg-[#1e293b] dark:bg-[#0f172a] border border-slate-700 rounded-xl focus:outline-none focus:border-blue-500 text-white transition-colors resize-none"
                placeholder="How can I help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-2 w-full flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white font-bold rounded-xl transition-all duration-300 hover:bg-blue-800 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(37,99,235,0.8)] active:scale-95 cursor-pointer"
            >
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
