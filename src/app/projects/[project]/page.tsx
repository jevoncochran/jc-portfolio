"use client";

import { useContext } from "react";
import { ProjectContext } from "@/context/ProjectContext";
import Image from "next/image";

const ProductPage = () => {
  const { selectedProject } = useContext(ProjectContext);

  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <Image
          src={`/assets/projects/${selectedProject.image}`}
          alt={selectedProject.name}
          layout="fill"
          objectFit="cover"
          className="absolute z-1"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h2 className="py-2">{selectedProject.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
