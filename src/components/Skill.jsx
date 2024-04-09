import typescript from "../assets/typescript.svg";
import python from "../assets/python.svg";
import postgres from "../assets/postgresql.svg";
import node from "../assets/nodejs.svg";
import javascript from "../assets/js.svg";
import html from "../assets/html_1.svg";
import css from "../assets/css_1.svg";
import react from "../assets/react.svg";
import cpp from "../assets/c.svg";
import next from "../assets/next-2.svg";
import express from "../assets/express.svg";
import sql from "../assets/mysql.svg";
import mongodb from "../assets/mongodb.svg";


const Skill = ({skillsRef}) => {
  const languages = [
    
    { name: "C++", icon: cpp },
    { name: "JavaScript", icon: javascript },
    { name: "TypeScript", icon: typescript },
    { name: "Python", icon: python },
  ];
  const frontend = [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "JavaScript", icon: javascript },
    { name: "React", icon: react },
    { name: "Next.js", icon: next },
  ];
  const backend = [
    { name: "Node.js", icon: node },
    { name: "Express", icon: express },
    { name: "SQL", icon: sql },
    { name: "PostgreSQL", icon: postgres },
    { name: "MongoDB", icon: mongodb },
  ];
  return (
    <main className="my-10 flex flex-col gap-10" ref={skillsRef}>
      <h1 className="uppercase text-4xl font-semibold text-white text-center">
        Skills
      </h1>
      <div className="flex md:items-center md:flex-row flex-col px-8 items-start md:gap-8 gap-4">
        <h1 className="text-white font-semibold text-lg">Programming Languages</h1>
        <div className="flex gap-8 items-center flex-wrap">
          {languages.map((item, idx) => (
            <img
              src={item.icon}
              alt={item.name}
              key={idx}
              className="w-10 h-10"
            />
          ))}
        </div>
        
      </div>
      <div className="flex md:items-center md:flex-row flex-col px-8 items-start md:gap-8 gap-4">
        <h1 className="text-white font-semibold text-lg">Frontend</h1>
        <div className="flex gap-8 items-center flex-wrap">
          {frontend.map((item, idx) => (
            <img
              src={item.icon}
              alt={item.name}
              key={idx}
              className="w-10 h-10"
            />
          ))}
        </div>
        
      </div>
      <div className="flex md:items-center md:flex-row flex-col px-8 items-start md:gap-8 gap-4">
        <h1 className="text-white font-semibold text-lg">Backend & Databases</h1>
        <div className="flex gap-8 items-center flex-wrap">
          {backend.map((item, idx) => (
            <img
              src={item.icon}
              alt={item.name}
              key={idx}
              className="w-12 h-12"
            />
          ))}
        </div>
        
      </div>
    </main>
  );
};
export default Skill;
