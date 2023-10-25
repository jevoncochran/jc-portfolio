import SocialIconContainer from "./SocialIconContainer";

const Main = () => {
  return (
    <div id="home" className="w-full h-full text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto px-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            BRIDGING VISION WITH CODE
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#0cad3c]">Jevon</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Full Stack Web Developer</h1>
          <p className="text-lg">
            I specialize in crafting exceptional user interfaces and
            experiences, leveraging technology to breathe life into the business
            ideas of clients and companies of all stripes.
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
