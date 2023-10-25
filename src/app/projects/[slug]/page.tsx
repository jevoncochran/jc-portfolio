"use client";

import Image from "next/image";
import { PROJECTS } from "@/constants";
import { AiFillGithub as GithubIcon } from "react-icons/ai";
import { MdLaunch as NavigateIcon } from "react-icons/md";

const ProductPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const selectedProject = PROJECTS.find((project) => project.url === slug);

  return (
    <div className="md:w-[1240px] pt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1240px] m-auto">
      <div className="hidden md:block w-full h-auto relative col-span-1">
        <Image
          src={`/assets/projects/${selectedProject?.image}`}
          alt={selectedProject?.name as string}
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
        <h2 className="pb-4 md:pb-0 text-center">{selectedProject?.name}</h2>
        <Image
          src={`/assets/projects/${selectedProject?.image}`}
          alt={selectedProject?.name as string}
          width={400}
          height={300}
          objectFit="cover"
          className="md:hidden w-full border shadow-lg"
        />
        <div className="px-8 md:px-0 pt-8">
          {selectedProject?.overview?.map((paragraph: string, idx: number) => (
            <p key={idx} className="mt-2 first:mt-0">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="flex gap-4 flex-wrap px-8 md:px-0 pt-8">
          {selectedProject?.technologies.map((tech, idx) => (
            <div key={idx} className="bg-gray-300 p-2 rounded-xl">
              {tech}
            </div>
          ))}
        </div>
        <div className="md:hidden flex gap-2 px-8 py-4">
          <button className="primary-btn p-2 flex items-center gap-2">
            <NavigateIcon /> Demo
          </button>
          <button className="second-btn p-2 flex items-center gap-2">
            <GithubIcon />
            Repo
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
