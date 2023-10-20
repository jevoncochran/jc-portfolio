import React from "react";
import Image from "next/image";

interface SkillCardProps {
  image: string;
  name: string;
}

const SkillCard = ({ image, name }: SkillCardProps) => {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image
            src={`/assets/skills/${image}`}
            alt="HTML"
            height={75}
            width={75}
          />
        </div>
        <div>
          <h3 className="flex flex-col items-center justify-center">{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
