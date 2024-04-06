import Profile from "../assets/profile.jpeg";
import Typewriter from "typewriter-effect/dist/core";
import { useRef, useEffect } from "react";
import { Twitter, Github, Linkedin, Download, Menu } from "lucide-react";
import TimeLine from "./Timeline";
import Projects from "./Projects";
import Skill from "./Skill";
import Contact from "./Contact";
import NavbarMobile from "./NavbarMobile";

const Home = ({
  aboutRef,
  experienceRef,
  projectsRef,
  skillsRef,
  contactRef,
}) => {
  const typeRef = useRef(null);
  useEffect(() => {
    typeRef.current = new Typewriter("#typewriter", {
      strings: ["Full-stack Web Developer", "Software Engineer"],
      autoStart: true,
      loop: true,
    });
    return () => {
      typeRef.current.stop();
    };
  }, []);
  return (
    <main className=" md:ml-[300px] w-full md:mt-16 px-2" ref={aboutRef}>
      <div className="bg-hero-pattern min-h-[300px] rounded-lg w-full">
        <div className="min-h-[300px] py-8 w-full bg-black/30 backdrop-blur-lg rounded-lg flex lg:flex-row flex-col lg:gap-2 gap-8 items-center justify-between px-12">
          <img
            className="h-60 w-60 rounded-full border-4 shadow-[0_0_3px_#fff,inset_0_0_6px_#fff,0_0_12px_#03f,0_0_15px_#08f,0_0_70px_#02f] "
            src={Profile}
          />
          {/* professional looking and modern */}
          <div className="ml-4 flex flex-col gap-4 items-center">
            <h1 className="text-3xl text-white font-bold">
              Hi, I'm <span className="text-[#5b75f0]"> Nishit Bansal</span>{" "}
            </h1>
            <p
              className="text-lg text-[#5b75f0] uppercase font-semibold"
              id="typewriter"
            ></p>
            <p className="text-sm text-zinc-300">
              I code like Neo dodging bullets in the Matrix, but with better
              coffee.
            </p>
            {/* RESUME BUTTON */}
            {/* <button className="text-white my-2 flex gap-2 items-center bg-black rounded-xl px-6 py-3 shadow-[0_0_3px_#fff,inset_0_0_6px_#fff,0_0_12px_#03f,0_0_5px_#08f,0_0_20px_#02f]">
              Resume
              <Download size={20} />
            </button> */}
          </div>
          <div className="flex px-4 py-2 gap-6 bg-black/30 rounded-full backdrop-blur-sm">
            <a
              href="https://github.com/Nishit278"
              className="hover:scale-110 hover:cursor-pointer trasition"
              target="_blank"
            >
              <Github className="text-orange-600" />
            </a>
            <a
              href="https://twitter.com/_Nishit_01"
              className="hover:scale-110 hover:cursor-pointer transition"
            >
              <Twitter className="text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/nishit-bansal/"
              className="hover:scale-110 hover:cursor-pointer transition"
              target="_blank"
            >
              <Linkedin className="text-green-500" />
            </a>
          </div>
        </div>
      </div>
      <TimeLine experienceRef={experienceRef} />
      <Projects projectsRef={projectsRef} />
      <Skill skillsRef={skillsRef} />
      <Contact contactRef={contactRef} />
    </main>
  );
};
export default Home;