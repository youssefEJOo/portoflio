import React from "react";
import { Github, Linkedin, ChevronUp } from "lucide-react";

const Footer = () => {
  // دالة عشان ترجع اليوزر لأول الصفحة بنعومة
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1e293b] dark:bg-[#0f172a] py-10 border-t border-slate-700/50 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* الجزء الأول: اللوجو والوصف */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-bold text-xl text-blue-500 tracking-tight mb-2">
            PORTFOLIO
          </span>
          <p className="text-slate-400 text-sm">
            Turning complex data into actionable insights.
          </p>
        </div>

        {/* الجزء الثاني: السوشيال ميديا */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/youssef-fathi-elshemy/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-800/40 text-slate-400 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          {/* <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-800/40 text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:-translate-y-1"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a> */}
        </div>

        {/* الجزء الثالث: الحقوق وزرار الطلوع لفوق */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors group cursor-pointer"
          >
            Back to top
            <ChevronUp
              size={16}
              className="transform group-hover:-translate-y-1 transition-transform duration-300"
            />
          </button>

          <p className="text-slate-500 text-sm text-center md:text-right">
            &copy; {new Date().getFullYear()} Youssef Fathi Elshemy. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
