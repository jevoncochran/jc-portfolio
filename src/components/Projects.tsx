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
];

const Projects = () => {
  return (
    <div className="w-full md:min-h-screen">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="section-header">Projects</p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              name={project.name}
              image={project.image}
              projectType={project.projectType}
              url={project.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
