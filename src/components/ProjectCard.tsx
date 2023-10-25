"use client";

import { ProjectContext } from "@/context/ProjectContext";
import { Project } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const router = useRouter();
  const { setSelectedProject } = useContext(ProjectContext);

  const goToProject = () => {
    setSelectedProject(project);
    router.push(`/projects/${project.url}`);
  };

  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#0cad3c] to-[#1fbd49]">
      <Image
        src={`/assets/projects/${project.image}`}
        alt={project.name}
        height={1720}
        width={3074}
        className="rounded-xl group-hover:opacity-10 border object-cover"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {project.name}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">
          {project.projectType}
        </p>
        <p
          onClick={goToProject}
          className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer min-w-[150px]"
        >
          More Info
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
