import React, { useRef, useState } from "react";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ project }) => {
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
      className="group bg-slate-800/40 dark:bg-slate-900/40 rounded-3xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)] flex flex-col"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="h-56 overflow-hidden bg-slate-900/80 relative">
        <img
          src={project.image}
          alt={project.title}
          className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-500 ${isHovered ? "opacity-0" : "opacity-100"}`}
        />

        <video
          ref={videoRef}
          src={project.video}
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 transform group-hover:scale-110 transition-transform duration-700"
        />

        {!isHovered && (
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <span className="px-3 py-1 bg-black/60 text-white text-xs font-bold rounded-full backdrop-blur-md border border-white/20 shadow-lg">
              Hover to play
            </span>
          </div>
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

        <div className="flex gap-6 mt-auto">
          <a
            href={project.github}
            className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors"
          >
            <Github size={18} /> Code
          </a>
          <a
            href={project.demo}
            className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors"
          >
            <ExternalLink size={18} /> Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
