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
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/jevoncochran/",
    },
    { icon: <FaGithub />, href: "https://github.com/jevoncochran" },
    { icon: <AiOutlineMail />, href: "#" },
    { icon: <BsFillPersonLinesFill />, href: "#" },
  ];

  return (
    <div className="flex items-center justify-between">
      {socialIcons.map((si, idx) => (
        <SocialIcon
          key={idx}
          padding={padding}
          scale={scale}
          icon={si.icon}
          href={si.href}
        />
      ))}
    </div>
  );
};

export default SocialIconContainer;
