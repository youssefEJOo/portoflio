import React, { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

const ProjectCard = ({ project, index, innerRef }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      ref={innerRef}
      style={{ transitionDelay: `${index * 150}ms` }}
      // السطر اللي جاي ده هو اللي اتعدل عشان يظهر الكروت لو مفيش سكرول
      className={`group bg-slate-800/40 dark:bg-slate-900/40 rounded-3xl overflow-hidden border border-slate-700/50 flex flex-col cursor-pointer transition-all duration-700 ease-out hover:border-blue-500/50 hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)] ${
        innerRef ? "opacity-0 translate-y-12" : "opacity-100"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="h-56 overflow-hidden bg-slate-900/80 relative">
        <img
          src={project.image}
          alt={project.title}
          className={`absolute inset-0 w-full h-full object-fill z-10 transition-opacity duration-500 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        />

        <video
          ref={videoRef}
          src={project.video}
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-fill z-10 transform transition-transform duration-700"
        />

        {!isHovered && (
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"></div>
        )}
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-semibold px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
            >
              {t}
            </span>
          ))}
        </div>

        {/* <div className="flex gap-6 mt-auto">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors"
          >
            <ExternalLink size={18} /> Demo
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectCard;
