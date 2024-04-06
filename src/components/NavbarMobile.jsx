import {
  Twitter,
  Github,
  UserRound,
  BugOff,
  CodeXml,
  FileBadge2,
  Send,
  Linkedin,
  Download,
  Menu,
  X,
  BriefcaseBusiness,
} from "lucide-react";
import { useState } from "react";
import tw from "tailwind-styled-components";
const NavbarMobile = ({
  aboutRef,
  experienceRef,
  projectsRef,
  skillsRef,
  contactRef,
  onScroll,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (ref) => {
    onScroll(ref);
    setIsOpen(false);
  };
  return (
    <nav className="h-20 md:hidden flex sticky inset-0 bg-[#12151C] z-[50] items-center justify-between px-4 text-2xl">
      <div className="text-white">
        <h1 className="text-3xl text-emerald-500 font-bold">निशित</h1>
      </div>
      <div className="z-[50]">
        {!isOpen ? (
          <Menu size={24} className="text-white" onClick={toggleMenu} />
        ) : (
          <X size={24} className="text-white" onClick={toggleMenu} />
        )}
      </div>
      {isOpen && (
        <div className="fixed h-screen inset-0 bg-black backdrop-blur-md bg-opacity-80 flex items-center justify-center">
          <div className="flex flex-col text-slate-200 list-none gap-4 ">
            <SidebarItem onClick={() => handleScroll(aboutRef)}>
              <UserRound /> About
            </SidebarItem>
            <SidebarItem onClick={() => handleScroll(experienceRef)}>
              <BriefcaseBusiness /> Experience
            </SidebarItem>

            <SidebarItem onClick={() => handleScroll(projectsRef)}>
              <FileBadge2 /> Projects
            </SidebarItem>

            <SidebarItem onClick={() => handleScroll(skillsRef)}>
              <CodeXml /> Skills
            </SidebarItem>
            <SidebarItem onClick={() => handleScroll(contactRef)}>
              <Send /> Contact Me
            </SidebarItem>
          </div>
        </div>
      )}
    </nav>
  );
};
const SidebarItem = tw.li`flex items-center gap-4 py-4`;
export default NavbarMobile;
