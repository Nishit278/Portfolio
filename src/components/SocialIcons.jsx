import {
  FaSquareXTwitter,
  FaLinkedin,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import tw from "tailwind-styled-components";
const SocialIcons = () => {
  return (
    <div className="flex fixed flex-col top-[35%] left-0">
      <ul>
        <SocialIcon>
          <a
            href="/"
            className="flex justify-between items-center w-full text-gray-200 "
          >
            X(Twitter) <FaXTwitter size={30} />
          </a>
        </SocialIcon>
        <SocialIcon>
          <a
            href="/"
            className="flex justify-between items-center w-full text-gray-200 "
          >
            LinkedIn <FaLinkedin size={30} />
          </a>
        </SocialIcon>
        <SocialIcon>
          <a
            href="/"
            className="flex justify-between items-center w-full text-gray-200 "
          >
            Github <FaGithub size={30} />
          </a>
        </SocialIcon>
      </ul>
    </div>
  );
};
const SocialIcon = tw.li`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-neutral-900/30 backdrop-blur-sm `;
export default SocialIcons;
