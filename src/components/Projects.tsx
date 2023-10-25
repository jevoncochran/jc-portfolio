import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/constants";

const Projects = () => {
  return (
    <div id="projects" className="w-full px-8 pt-28">
      <div className="max-w-[1240px] mx-auto px-2">
        <p className="section-header">Projects</p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
