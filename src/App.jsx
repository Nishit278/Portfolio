import { useState, useEffect, useRef } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import NavbarMobile from "./components/NavbarMobile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    console.log(sectionRef);
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main className="bg-[#11151c] w-screen min-h-screen flex flex-col md:flex-row">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
      <NavbarMobile
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
        onScroll={scrollToSection}
      />
      <Sidebar
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
        onScroll={scrollToSection}
      />
      <Home
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
      />
    </main>
  );
}

export default App;
