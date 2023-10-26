import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-full px-8 pt-28 md:pt-20 flex items-center"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="section-header">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            {"// A Developer With Entreprenuerial Drive"}
          </p>
          <p className="py-2 text-gray-600">My name is Jevon Cochran.</p>
          <p className="py-2 text-gray-600">
            I'm a versatile Full Stack Web Developer, equally passionate about
            crafting exceptional frontend user interfaces and robust backends.
            My entrepreneurial spirit thrives in early-stage companies and
            freelance roles, where my many-hats mentality and knack for
            innovation shines. I aspire to be a future founder, making such
            opportunities invaluable for my growth.
          </p>
          <p className="py-2 text-gray-600">
            My tech toolkit includes Next.js, React, Node.js, Typescript, Redux,
            Stripe, Google Cloud, and MongoDB. I'm open to contract and
            full-time roles. Let's connect and explore opportunities.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="/assets/about/headshot.jpg"
            alt="Jevon Cochran, Full Stack Web Developer"
            height={400}
            width={200}
            className=" object-cover w-[350px] h-[450px] rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
