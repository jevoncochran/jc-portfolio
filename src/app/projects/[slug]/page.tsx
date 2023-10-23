"use client";

import Image from "next/image";
import { PROJECTS } from "@/constants";
import { AiFillGithub as GithubIcon } from "react-icons/ai";
import { MdLaunch as NavigateIcon } from "react-icons/md";

const ProductPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const selectedProject = PROJECTS.find((project) => project.url === slug);

  return (
    <div className="w-[1240px] pt-20 grid grid-cols-2 gap-8 max-w-[1240px] m-auto">
      <div className="w-full h-auto relative col-span-1">
        <Image
          src={`/assets/projects/${selectedProject?.image}`}
          alt={selectedProject?.name}
          // layout="fill"
          width={400}
          height={300}
          objectFit="cover"
          className="w-full border shadow-lg"
        />
        <div className="flex gap-2 py-4">
          <button className="primary-btn p-2 flex items-center gap-2">
            <NavigateIcon /> Demo
          </button>
          <button className="second-btn p-2 flex items-center gap-2">
            <GithubIcon />
            Repo
          </button>
        </div>
      </div>

      <div className="col-span-1">
        <h2 className="text-center">{selectedProject?.name}</h2>
        <p className="py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="flex gap-4 flex-wrap">
          {selectedProject?.technologies.map((tech, idx) => (
            <div key={idx} className="bg-gray-200 p-2 rounded-xl">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
