import React from "react";
import Image from "next/image";
import ExperiencesData from "@/data/ExperiencesData";

const Experiences = () => {
  const [activeExperience, setActiveExperience] = React.useState(0);

  return (
    <div className="pt-20">
      <h4 className={"uppercase text-4xl text-[#F9F871] mb-10"}>Experiences</h4>
      <div className={"w-full flex flex-row space-x-20"}>
        <div className={"flex flex-col space-y-5"}>
          {ExperiencesData.map((experience, index) => (
            <div
              onClick={() => setActiveExperience(index)}
              role="button"
              key={index}
              className={
                "flex flex-row space-x-5 bg-opacity-20 h-20 w-80 pl-5 items-center rounded-lg" +
                `${activeExperience === index ? " bg-white" : ""}`
              }
            >
              <div className={"w-50 h-50"}>
                <Image
                  src={"/MEDIAMETRIE.png"}
                  alt={"Médiamétrie Logo"}
                  width={50}
                  height={50}
                  quality={100}
                />
              </div>
              <div>
                <h5>{experience.entreprise}</h5>
                <h6 className={"font-extralight"}>{experience.poste}</h6>
              </div>
            </div>
          ))}
        </div>
        <div className={"flex flex-col space-y-4"}>
          <p className={"font-extralight text-[#F9F871]"}>
            {ExperiencesData[activeExperience].date_debut +
              " - " +
              ExperiencesData[activeExperience].date_fin}
          </p>
          <ul>
            {ExperiencesData[activeExperience].points_principaux.map((point, index) => (
                <li key={index}>{point}</li>))}
          </ul>
          <div className={"flex flex-row"}>
            <Image
              src={"/Avaya_Logo.svg.png"}
              alt={"Logo Avaya"}
              width={100}
              height={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
