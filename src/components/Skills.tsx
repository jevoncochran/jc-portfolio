import React from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="section-header">Skills</p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCard image="html.png" name="HTML" />
          <SkillCard image="css.png" name="CSS" />
          <SkillCard image="javascript.png" name="Javascript" />
          <SkillCard image="react.png" name="React" />
          <SkillCard image="nextjs.png" name="Next.js" />
          <SkillCard image="typescript.png" name="Typescript" />
          <SkillCard image="nodejs.png" name="Node.js" />
          <SkillCard image="tailwindcss.png" name="Tailwind CSS" />
          <SkillCard image="stripe.png" name="Stripe" />
          <SkillCard image="firebase.png" name="Firebase" />
          <SkillCard image="stripe.png" name="Stripe" />
          <SkillCard image="materialui.png" name="Material UI" />
          <SkillCard image="chakraui.png" name="Chakra UI" />
          <SkillCard image="googlecloud.png" name="Google Cloud" />
          <SkillCard image="python.png" name="Python" />
          <SkillCard image="mongo.png" name="MongoDB" />
          <SkillCard image="aws.png" name="AWS" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
