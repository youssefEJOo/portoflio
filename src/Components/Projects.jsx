import React from "react";
import ProjectCard from "./ProjectCard"; // استدعينا الكارت اللي لسه عاملينه

const Projects = () => {
  // داتا المشاريع بتاعتك
  const projectsData = [
    {
      title: "Sales Analysis Dashboard",
      description:
        "Interactive Power BI dashboard analyzing 2 years of sales data to track KPIs and uncover trends.",
      image: "/projects/project1-static.jpg",
      video: "/projects/project1-demo.mp4",
      tech: ["Power BI", "SQL", "Excel"],
      github: "#",
      demo: "#",
    },
    {
      title: "Customer Churn Analysis",
      description:
        "Comprehensive data analysis project identifying key factors leading to customer churn.",
      image: "/projects/project2-static.jpg",
      video: "/projects/project2-demo.mp4",
      tech: ["SQL", "Excel", "Data Storytelling"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-[#1e293b] dark:bg-[#0f172a] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* الهيدر بأنيميشن النقطتين */}
        <div className="relative group cursor-pointer mb-20">
          <span className="absolute -left-12 top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full transition-all duration-500 ease-in-out group-hover:left-0 group-hover:w-1/2 group-hover:h-full group-hover:rounded-none z-0"></span>
          <span className="absolute -right-12 top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full transition-all duration-500 ease-in-out group-hover:right-0 group-hover:w-1/2 group-hover:h-full group-hover:rounded-none z-0"></span>
          <div className="relative w-48 h-16 border-2 border-blue-500 flex items-center justify-center overflow-hidden z-10 pointer-events-none">
            <h2 className="text-2xl font-bold text-blue-500 group-hover:text-white transition-colors duration-500">
              Projects
            </h2>
          </div>
        </div>

        {/* عرض الكروت */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
          {projectsData.map((project, index) => (
            // هنا بنباصي الداتا للكارت الواحد يشتغل بيها
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* زرار See More */}
        <div className="mt-16">
          <button className="px-10 py-3 bg-blue-600 text-white font-bold rounded-xl transition-all duration-300 hover:bg-blue-800 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(37,99,235,0.8)] active:scale-95">
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
