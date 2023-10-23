import Link from "next/link";

interface SocialIconProps {
  icon: JSX.Element;
  padding: number;
  scale: number;
  href: string;
}

const SocialIcon = ({ icon, padding, scale, href }: SocialIconProps) => {
  return (
    <Link href={href} legacyBehavior passHref>
      <a target="_blank">
        <div
          className={`rounded-full shadow-lg shadow-gray-400 p-${padding} cursor-pointer hover:scale-${scale} ease-in duration-500`}
        >
          {icon}
        </div>
      </a>
    </Link>
  );
};

export default SocialIcon;
