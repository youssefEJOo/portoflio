import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="home"
      // pt-28: بتنزل المحتوى تحت النافبار في الموبايل
      // md:pt-0: بترجع التوسيط العادي في الشاشات الكبيرة
      // الألوان: bg-[#1e293b] (الكحلي الفاتح) و dark:bg-[#0f172a] (الكحلي الغامق)
      className="pt-28 pb-12 md:pt-0 min-h-screen flex flex-col md:flex-row items-center justify-center px-8 gap-10 bg-[#1e293b] dark:bg-[#0f172a] transition-colors duration-500"
    >
      {/* الجزء الخاص بالصورة */}
      {/* w-52 h-52: صغرنا الحجم في الموبايل حاجات بسيطة زي ما طلبت (كانت 64) */}
      <div className="w-52 h-52 md:w-80 md:h-80 flex-shrink-0 overflow-hidden rounded-2xl border-4 border-blue-500/30 shadow-[0_0_30px_rgba(37,99,235,0.15)]">
        <img
          src="/your-photo.jpg" // اتأكد إن الاسم صح في فولدر public
          alt="Youssef"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* الجزء الخاص بالكلام */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-xs md:text-sm font-bold text-blue-400 uppercase tracking-[0.2em] mb-3">
          Hello, I'm
        </h1>

        <h2 className="text-3xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
          Youssef Fathi Elshemy
        </h2>

        <h3 className="text-xl md:text-3xl font-semibold text-slate-200 mb-6">
          I am a{" "}
          <span className="text-blue-400">
            <Typewriter
              words={["Data Analyst", "Insight Builder", "Problem Solver"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
            />
          </span>
        </h3>

        <p className="text-slate-400 leading-relaxed text-base md:text-lg mb-8">
          Passionate about transforming complex data into actionable insights.
          Experienced in building data-driven stories that help businesses grow.
        </p>

        <div className="flex justify-center md:justify-start">
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/20 active:scale-95 cursor-pointer"
          >
            View My Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
