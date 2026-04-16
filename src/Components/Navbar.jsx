import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 1. قراءة الثيم من المتصفح (لو مفيش، خليه Dark كافتراضي)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  // 2. مراقب بيشتغل مع أي تغيّر عشان يحط كلاس "dark" على الموقع كله ويحفظه
  useEffect(() => {
    const htmlElement = document.documentElement;

    if (isDarkMode) {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // 3. الفانكشن اللي بتبدل بين المودز
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const navLinks = [
    // ضفتلك علامة / قبل الـ # عشان لو أنت في صفحة المشاريع ورجعت للرئيسية اللينك يشتغل صح
    { name: "Home", href: "/#home" },
    { name: "Projects", href: "/#projects" },
    { name: "Skills", href: "/#skills" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
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
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-700 dark:bg-slate-800 text-yellow-400 transition-all duration-300 hover:scale-110 cursor-pointer"
            >
              {isDarkMode ? (
                <Moon size={20} fill="currentColor" />
              ) : (
                <Sun size={20} />
              )}
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleTheme} className="text-yellow-400">
              {isDarkMode ? (
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
        className={`md:hidden transition-all duration-300 ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-[#1e293b] dark:bg-[#0f172a]`}
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
