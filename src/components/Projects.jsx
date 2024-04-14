import bape from "../assets/BORED APE.png";
import goingMerry from "../assets/GoingMerry.png";
import ml from "../assets/hsd.png";
import conway from "../assets/Conway.png";
import tw from "tailwind-styled-components";


const Projects = ({ projectsRef }) => {
  const bapeTags = [
    { title: "NextJs", css: "bg-violet-50 text-violet-500 border-violet-300" },
    { title: "Stripe", css: "bg-sky-50 text-sky-500 border-sky-300" },
    { title: "Sanity.io", css: "bg-amber-50 text-amber-500 border-amber-300" },
  ];
  const goingMerryTags = [
    { title: "ReactJS", css: "bg-blue-50 text-blue-500 border-blue-300" },
    { title: "NodeJS", css: "bg-cyan-50 text-cyan-500 border-cyan-300" },
    { title: "ExpressJS", css: "bg-red-50 text-red-500 border-red-300" },
    { title: "MongoDB", css: "bg-green-50 text-green-500 border-green-300" },
  ];
  const hsdTags = [
    { title: "ML", css: "bg-blue-50 text-blue-500 border-blue-300" },
    { title: "NLP", css: "bg-cyan-50 text-cyan-500 border-cyan-300" },
    { title: "AI", css: "bg-red-50 text-red-500 border-red-300" },
    { title: "Tensorflow", css: "bg-green-50 text-green-500 border-green-300" },
  ];
  const conwayTags = [
    { title: "Automation", css: "bg-blue-50 text-blue-500 border-blue-300" },
    { title: "ReactJS", css: "bg-cyan-50 text-cyan-500 border-cyan-300" },
    {
      title: "Zero-player",
      css: "bg-green-50 text-green-500 border-green-300",
    },
    { title: "Javascript", css: "bg-red-50 text-red-500 border-red-300" },
  ];
  return (
    <main className="my-20" id="projects" ref={projectsRef}>
      <h1 className="text-center font-semibold text-4xl uppercase text-white">
        Projects
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 px-8 mt-8">
        <Card href="https://bape-clothing.vercel.app/" target="_blank">
          <img
            src={bape}
            alt="bape"
            className="w-full object-cover rounded-lg"
          />
          <div className="flex flex-wrap gap-2 px-4">
            {bapeTags.map((tag, index) => (
              <span
                key={index}
                className={`text-xs px-4 py-1 ${tag.css} rounded-full`}
              >
                {tag.title}
              </span>
            ))}
          </div>
          <h1 className="text-2xl text-zinc-200 px-4 truncate">Bored Ape</h1>
          <p className="text-zinc-400 px-4 mb-4 text-sm">
            Developed a fully-functional e-commerce website prototype showcasing
            street fashion t-shirts, leveraging modern frameworks like Next.js
            and Sanity.io.
          </p>
        </Card>
        <Card href="https://github.com/Nishit278/Goingmerry" target="_blank">
          <img
            src={goingMerry}
            alt="goingMerry"
            className="w-full object-cover rounded-lg"
          />
          <div className="flex flex-wrap gap-2 px-4">
            {goingMerryTags.map((tag, index) => (
              <span
                key={index}
                className={`text-xs px-4 py-1 ${tag.css} rounded-full`}
              >
                {tag.title}
              </span>
            ))}
          </div>
          <h1 className="text-2xl text-zinc-200 px-4 truncate">Going Merry</h1>
          <p className="text-zinc-400 px-4 mb-4 text-sm">
            Leveraged MERN stack to create a scalable system that manages
            real-time travel data, ensuring accurate availability and pricing
            for users.
          </p>
        </Card>
        <Card
          href="https://github.com/Nishit278/Hate-Speech-Detection"
          target="_blank"
        >
          <img
            src={ml}
            alt="hate-speech-detection"
            className="w-full object-cover rounded-lg"
          />
          <div className="flex flex-wrap gap-2 px-4">
            {hsdTags.map((tag, index) => (
              <span
                key={index}
                className={`text-xs px-4 py-1 ${tag.css} rounded-full`}
              >
                {tag.title}
              </span>
            ))}
          </div>
          <h1 className="text-2xl text-zinc-200 px-4 truncate">
            Hate Speech Detection
          </h1>
          <p className="text-zinc-400 px-4 text-sm mb-4">
            Conducted research on various machine learning and vectorization
            techniques, identifying the most effective combination for improved
            hate speech detection accuracy.
          </p>
        </Card>
        <Card href="https://github.com/Nishit278/conways-game" target="_blank">
          <img
            src={conway}
            alt="conways-game-of-life"
            className="w-full object-cover rounded-lg"
          />
          <div className="flex flex-wrap gap-2 px-4">
            {conwayTags.map((tag, index) => (
              <span
                key={index}
                className={`text-xs px-4 py-1 ${tag.css} rounded-full`}
              >
                {tag.title}
              </span>
            ))}
          </div>
          <h1 className="text-2xl text-zinc-200 px-4 truncate">
            Conway's Game of Life
          </h1>
          <p className="text-zinc-400 px-4 mb-4">
            Conway's Game of Life is a cellular automaton zero-player game,
            evolution is determined by its initial state, requiring no further
            input.
          </p>
        </Card>
      </div>
    </main>
  );
};
const Card = tw.a`bg-[#1C1B23] rounded-lg flex flex-col gap-4 shadow-lg shadow-violet-900 hover:cursor-pointer hover:shadow-2xl hover:shadow-indigo-900 transition ease-in-out duration-300`;
// const Card = tw.div`bg-[#1C1B23] rounded-lg flex flex-col gap-4 shadow-[0_0_3px_#fff,inset_0_0_6px_#fff,0_0_12px_#03f,0_0_15px_#08f,0_0_7px_#02f]`;
export default Projects;
