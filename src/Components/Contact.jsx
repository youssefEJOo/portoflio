import React, { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  // المراجع الخاصة بمراقبة السكرول للهيدر
  const sectionRef = useRef(null);
  const [isSectionInView, setIsSectionInView] = useState(false);

  useEffect(() => {
    // مراقب السيكشن عشان يشغل أنيميشن النقطتين
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsSectionInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) sectionObserver.observe(sectionRef.current);

    return () => {
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef} // ربطنا السيكشن بالمراقب
      className="py-24 px-6 bg-[#1e293b] dark:bg-[#0f172a] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* --- هيدر السيكشن بأنيميشن الموبايل واللاب --- */}
        <div className="relative group mb-20">
          <span
            className={`absolute top-1/2 -translate-y-1/2 bg-blue-500 transition-all duration-700 ease-in-out z-0 
            ${
              isSectionInView
                ? "left-0 w-1/2 h-full rounded-none md:-left-12 md:w-4 md:h-4 md:rounded-full"
                : "-left-12 w-4 h-4 rounded-full"
            } 
            md:group-hover:left-0 md:group-hover:w-1/2 md:group-hover:h-full md:group-hover:rounded-none`}
          ></span>

          <span
            className={`absolute top-1/2 -translate-y-1/2 bg-blue-500 transition-all duration-700 ease-in-out z-0 
            ${
              isSectionInView
                ? "right-0 w-1/2 h-full rounded-none md:-right-12 md:w-4 md:h-4 md:rounded-full"
                : "-right-12 w-4 h-4 rounded-full"
            } 
            md:group-hover:right-0 md:group-hover:w-1/2 md:group-hover:h-full md:group-hover:rounded-none`}
          ></span>

          <div className="relative w-48 h-16 border-2 border-blue-500 flex items-center justify-center overflow-hidden z-10 pointer-events-none">
            <h2
              className={`text-2xl font-bold transition-colors duration-500 
              ${isSectionInView ? "text-white md:text-blue-500" : "text-blue-500"} 
              md:group-hover:text-white`}
            >
              Contact
            </h2>
          </div>
        </div>

        {/* --- محتوى الـ Contact --- */}
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
                  <p className="text-white font-medium">+20 1069110100</p>
                </div>
              </div>
            </div>
          </div>

          {/* العمود الثاني: الفورم */}
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
