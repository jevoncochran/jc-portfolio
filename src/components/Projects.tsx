import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "JCommerce",
    image: "jcommerce1.png",
    projectType: "Next.js",
    url: "jcommerce",
  },
  {
    name: "Google Jocs",
    image: "googlejocs1.png",
    projectType: "Next.js",
    url: "google-jocs",
  },
  { name: "Campr", image: "campr.png", projectType: "Next.js", url: "campr" },
];

const Projects = () => {
  return (
    <div id="projects" className="w-full pt-28">
      <div className="max-w-[1240px] mx-auto px-2">
        <p className="section-header">Projects</p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
