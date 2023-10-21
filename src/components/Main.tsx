import SocialIconContainer from "./SocialIconContainer";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Jevon</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Full Stack Web Developer</h1>
          <p>
            I'm a front-end web developer specialized in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I'm focused on building responsive front-end web applications while
            learning back-end technologies.
          </p>
          <div className="max-w-[330px] m-auto py-6">
            <SocialIconContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
