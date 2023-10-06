import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const TechnologyCard = ({ technology }) => (
  <div className="w-64 p-4 border border-gray-200 rounded-lg shadow-md">
    <img
      src={technology.icon}
      alt={`${technology.name} icon`}
      className="w-16 h-16 mx-auto mb-4"
    />
    <h3 className="text-xl font-semibold text-center">{technology.name}</h3>
  </div>
);

const Tech = () => {
  return (
    <div>
      <h2 className="text-6xl font-bold mb-12">Technologies</h2>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5" key={technology.name}>
            <TechnologyCard technology={technology} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
