import React, { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    // الخلفية: slate-800 (كحلي فاتح) والدارك: slate-950 (كحلي غامق)
    <nav className="fixed w-full z-50 bg-[#1e293b]/90 dark:bg-[#0f172a]/90 backdrop-blur-md border-b border-slate-700/50 dark:border-white/5 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-2xl tracking-tight text-blue-400">
            PORTFOLIO
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-200 dark:text-slate-400 hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-slate-700 dark:bg-slate-800 text-yellow-400 transition-all duration-300 hover:scale-110 cursor-pointer"
            >
              {darkMode ? (
                <Moon size={20} fill="currentColor" />
              ) : (
                <Sun size={20} />
              )}
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleDarkMode} className="text-yellow-400">
              {darkMode ? (
                <Moon size={22} fill="currentColor" />
              ) : (
                <Sun size={22} />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-200"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"} overflow-hidden bg-[#1e293b] dark:bg-[#0f172a]`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 border-t border-slate-700 dark:border-slate-800">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-3 text-slate-200 border-b border-slate-700/50"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
