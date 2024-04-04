import React from "react";
import SkillCard from "../components/SkillCard";
import one from "../assets/Pandas.png";
import two from "../assets/numpy.png";
import three from "../assets/matplotlib.png";

const Skills = () => {
  return (
    <div className="bg-black h-fit w-full flex items-center justify-between flex-col pt-28 pb-10 gap-10 text-white text-4xl ">
      <p className="text-yellow-400 text-3xl font-semibold tracking-widest uppercase" data-aos = "fade-up"  data-aos-delay="100">
        Skills
      </p>
      <div className="grid grid-cols-3 grid-rows-2 gap-28" data-aos = "fade-up"  data-aos-delay="200">
        <SkillCard
          heading="Data Analysis"
          photo1={one}
          photo2={two}
          photo3={three}
        />
        <SkillCard
          heading="Data Analysis"
          photo1={one}
          photo2={two}
          photo3={three}
        />
        <SkillCard
          heading="Data Analysis"
          photo1={one}
          photo2={two}
          photo3={three}
        />
        <SkillCard
          heading="Data Analysis"
          photo1={one}
          photo2={two}
          photo3={three}
        />
        <SkillCard
          heading="Data Analysis"
          photo1={one}
          photo2={two}
          photo3={three}
        />
        <SkillCard
          heading="Data Analysis"
          photo1={one}
          photo2={two}
          photo3={three}
        />
      </div>
    </div>
  );
};

export default Skills;
