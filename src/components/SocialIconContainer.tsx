import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import SocialIcon from "./SocialIcon";

interface SocialIconContainerProps {
  padding?: number;
  scale?: number;
}

const SocialIconContainer = ({
  padding = 6,
  scale = 110,
}: SocialIconContainerProps) => {
  const socialIcons = [
    { icon: <FaLinkedinIn /> },
    { icon: <FaGithub /> },
    { icon: <AiOutlineMail /> },
    { icon: <BsFillPersonLinesFill /> },
  ];

  return (
    <div className="flex items-center justify-between">
      {socialIcons.map((si, idx) => (
        <SocialIcon key={idx} padding={padding} scale={scale} icon={si.icon} />
      ))}
    </div>
  );
};

export default SocialIconContainer;
