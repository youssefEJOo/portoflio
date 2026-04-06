import React from "react";
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

  return (
    <section
      id="skills"
      className="py-18 px-6 bg-[#1e293b] dark:bg-[#0f172a] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* --- الهيدر (النقط من بره والأنيميشن السموث) --- */}
        <div className="relative group cursor-pointer mb-35">
          <span className="absolute -left-12 top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full transition-all duration-700 ease-in-out group-hover:left-0 group-hover:rounded-none z-0 group-hover:h-full group-hover:w-1/2"></span>
          <span className="absolute -right-12 top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full transition-all duration-700 ease-in-out group-hover:right-0 group-hover:rounded-none z-0 group-hover:h-full group-hover:w-1/2"></span>

          <div className="relative w-48 h-16 border-2 border-blue-500 flex items-center justify-center overflow-hidden z-10 pointer-events-none">
            <h2 className="text-2xl font-bold text-blue-500 group-hover:text-white transition-colors duration-500">
              Skills
            </h2>
          </div>
        </div>

        {/* --- شبكة المهارات (الشادو رجع هنا) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mb-27">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              // الشادو ضفته هنا: hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.4)]
              className="group p-8 rounded-2xl bg-slate-800/40 dark:bg-slate-900/40 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-3 flex flex-col items-center text-center hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)]"
            >
              <div className="mb-5 transform group-hover:scale-110 transition-transform duration-500">
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
