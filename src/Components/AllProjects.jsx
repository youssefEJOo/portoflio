import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/ProjectData";

const AllProjects = () => {
  // السطر ده وظيفته إنه لما تفتح الصفحة دي، يجيبك من أولها فوق مش من نصها
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen py-24 px-6 bg-[#1e293b] dark:bg-[#0f172a] transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* --- زرار الرجوع للصفحة الرئيسية --- */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 font-medium mb-12 transition-colors"
        >
          <ArrowLeft size={20} /> Back to Home
        </Link>

        {/* --- عنوان الصفحة --- */}
        <h1 className="text-4xl font-extrabold text-white mb-12 text-center">
          All <span className="text-blue-500">Projects</span>
        </h1>

        {/* --- عرض كل المشاريع من ملف الداتا --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
