import { experimental_sx } from "@mui/material";
import { UserRound, BugOff, CodeXml, FileBadge2, Send } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { useRef } from "react";
import tw from "tailwind-styled-components";

const Sidebar = ({
  aboutRef,
  experienceRef,
  projectsRef,
  skillsRef,
  contactRef,
  onScroll,
}) => {
  return (
    <main className="hidden md:flex flex-col bg-transparent shadow-lg w-full md:w-[300px] fixed inset-1 pb-10 rounded-xl px-4">
      <h1 className="text-3xl text-emerald-500 font-bold p-3">निशित</h1>
      <div className="flex flex-col bg-[#1C1B23] h-full rounded-xl px-4 py-8">
        <div className="flex flex-col text-slate-200 list-none gap-4 ">
          <SidebarItem onClick={() => onScroll(aboutRef)}>
            <UserRound /> About
          </SidebarItem>
          <SidebarItem onClick={() => onScroll(experienceRef)}>
            <BriefcaseBusiness /> Experience
          </SidebarItem>

          <SidebarItem onClick={() => onScroll(projectsRef)}>
            <FileBadge2 /> Projects
          </SidebarItem>

          <SidebarItem onClick={() => onScroll(skillsRef)}>
            <CodeXml /> Skills
          </SidebarItem>
          <SidebarItem onClick={() => onScroll(contactRef)}>
            <Send /> Contact Me
          </SidebarItem>
        </div>
      </div>
    </main>
  );
};
const SidebarItem = tw.li`flex items-center gap-4 hover:bg-[#3a3848] p-2 rounded-md transition ease-linear `;
export default Sidebar;
