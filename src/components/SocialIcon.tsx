import React from "react";

interface SocialIconProps {
  icon: JSX.Element;
  padding?: number;
  scale?: number;
}

const SocialIcon = ({ icon, padding = 6, scale = 110 }: SocialIconProps) => {
  return (
    <div
      className={`rounded-full shadow-lg shadow-gray-400 p-${padding} cursor-pointer hover:scale-${scale} ease-in duration-500`}
    >
      {icon}
    </div>
  );
};

export default SocialIcon;
