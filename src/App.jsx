import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // استدعاء أدوات التنقل
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import AllProjects from "./Components/AllProjects"; // استدعينا الصفحة الجديدة اللي لسه عاملينها

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* المسار الأول: الصفحة الرئيسية (الـ Home) */}
        <Route
          path="/"
          element={
            <main>
              <Navbar />
              <Hero />
              <Skills />
              <Projects />
              <Contact />
              <Footer />
            </main>
          }
        />

        {/* المسار التاني: صفحة كل المشاريع */}
        <Route path="/all-projects" element={<AllProjects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
