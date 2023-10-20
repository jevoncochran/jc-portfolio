import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  image: string;
  name: string;
  projectType: string;
  url: string;
}

const ProjectCard = ({ image, name, projectType, url }: ProjectCardProps) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        src={`/assets/projects/${image}`}
        alt={name}
        height={1720}
        width={3074}
        className="rounded-xl group-hover:opacity-10 border object-cover"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {name}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{projectType}</p>
        <Link href={`/projects/${url}`}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
