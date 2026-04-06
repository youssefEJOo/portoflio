import React, { useEffect, useRef, useState } from "react";
import { Table, Database, BarChart3 } from "lucide-react";

const Skills = () => {
  const skillsData = [
    {
      name: "Excel",
      icon: <Table size={40} className="text-green-500" />,
      desc: "Data Cleaning & Dashboarding",
    },
    {
      name: "SQL",
      icon: <Database size={40} className="text-blue-500" />,
      desc: "Database Querying & Management",
    },
    {
      name: "Power BI",
      icon: <BarChart3 size={40} className="text-yellow-500" />,
      desc: "Business Intelligence & Reporting",
    },
  ];

  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [isSectionInView, setIsSectionInView] = useState(false);

  useEffect(() => {
    // 1. مراقب السيكشن (عشان يملى النقطتين في الموبايل)
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsSectionInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) sectionObserver.observe(sectionRef.current);

    // 2. مراقب الكروت (الأنيميشن بتاع السكرول)
    const cardObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // شيل كلاسات الاختفاء عشان الكارت يظهر ويطلع لفوق
            entry.target.classList.remove("opacity-0", "translate-y-12");
            // السطر ده مهم: بيوقف المراقبة بعد ما الكارت يظهر، عشان يفضل ثابت وميختفيش تاني
            observer.unobserve(entry.target);
          }
        });
      },
      // الـ rootMargin ده بيخلي الكارت يظهر قبل ما يلمس آخر الشاشة بـ 50 بكسل عشان يبان في الموبايل أسرع
      { rootMargin: "0px 0px -50px 0px" }
    );

    cardsRef.current.forEach((card) => {
      if (card) cardObserver.observe(card);
    });

    return () => {
      sectionObserver.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      // شلنا overflow-hidden من هنا عشان متعملش بلوك للأنيميشن في الموبايل
      className="py-18 px-6 bg-[#1e293b] dark:bg-[#0f172a] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* --- الهيدر --- */}
        <div className="relative group mb-35">
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
              Skills
            </h2>
          </div>
        </div>

        {/* --- شبكة المهارات --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mb-27">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              // شلنا tabIndex والـ focus، ورجعنا الـ hover العادي اللي بيشتغل صح في اللاب والموبايل
              className="group p-8 rounded-2xl bg-slate-800/40 dark:bg-slate-900/40 border border-slate-700/50 flex flex-col items-center text-center cursor-pointer
              opacity-0 translate-y-12 transition-all duration-700 ease-out
              hover:border-blue-500/50 hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)]"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-5 transform transition-transform duration-500 group-hover:scale-110">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {skill.name}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
