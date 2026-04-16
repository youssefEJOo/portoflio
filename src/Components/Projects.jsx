import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"; // استدعاء اللينك من الراوتر
import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/ProjectData";

const Projects = () => {
  // المراجع الخاصة بمراقبة السكرول
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [isSectionInView, setIsSectionInView] = useState(false);

  useEffect(() => {
    // 1. مراقب السيكشن للهيدر
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsSectionInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) sectionObserver.observe(sectionRef.current);

    // 2. مراقب الكروت للأنيميشن
    const cardObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-12");
            observer.unobserve(entry.target);
          }
        });
      },
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

  // هناخد أول مشروعين بس للعرض في الصفحة الرئيسية
  const featuredProjects = projectsData.slice(0, 2);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 px-6 bg-[#1e293b] dark:bg-[#0f172a] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* --- الهيدر بأنيميشن الموبايل واللاب --- */}
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
              Projects
            </h2>
          </div>
        </div>

        {/* --- عرض أول مشروعين بس --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              innerRef={(el) => (cardsRef.current[index] = el)}
            />
          ))}
        </div>

        {/* --- زرار See More (اتحول لـ Link) --- */}
        <div className="mt-16">
          <Link
            to="/all-projects"
            className="inline-block px-10 py-3 bg-blue-600 text-white font-bold rounded-xl transition-all duration-300 hover:bg-blue-800 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(37,99,235,0.8)] active:scale-95 cursor-pointer"
          >
            See All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
