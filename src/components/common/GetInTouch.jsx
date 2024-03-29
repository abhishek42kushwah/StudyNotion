import React from "react";
import HomeHightLightText from "../core/HomePages/HomeHightLightText";
import Button from "../core/HomePages/Button";
const learningGridArray = [
  {
    order: -1,
    heading: "World-Class Learning for",
    highLiteText: "Anyone, Anywhere",
    description:
      "StudyNotion partners with more than 275+ leading universities and companies to bring flexible, affordable,job-relevant online learning to individuals and organizations worldwide.",
    btnText: "Learn More",
    btnLink: "/",
  },
  {
    order: 1,
    heading: "Curriculum Based on Industry Needs",
    description:
      "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
  },
  {
    order: 2,
    heading: "Our Learning Methods",
    description:
      "StudyNotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "StudyNotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 4,
    heading: `Rating "Auto-grading"`,
    description:
      "StudyNotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 5,
    heading: "Ready to Work",
    description:
      "StudyNotion partners with more than 275+ leading universities and companies to bring ",
  },
];

function GetInTouch() {
  return (

<div className="bg-richblack-900  ">
      <div className=" w-11/12 grid mx-auto lg:grid-cols-4 mb-10 grid-col-1 pt-20">
        {learningGridArray.map((card, index) => {
          return (
            <div
              key={index}
              className={`${index === 0 && "lg:col-span-2 bg-richblack-900"}
          ${card.order % 2 === 1 ? "bg-richblack-700" : "bg-richblack-800"}
          ${card.order === 3 && "lg:col-start-2"}
          `}
            >
              {card.order < 0 ? (
                <div className="">
                  <div className="text-white text-4xl font-semibold flex flex-col">
                    {card.heading}
                    <HomeHightLightText text={card.highLiteText} />
                  </div>
                  <p className="text-richblack-400 font-bold w-[550px] pt-3 ">{card.description}</p>
                 <div className=" w-[130px]  pt-6   ">
                 <Button active={true} linkTo={card.btnLink} >
                    {card.btnText}
                  </Button>
                 </div>
                </div>
              ) : (
                <div className="flex flex-col py-2 gap-y-6 m-6 ">
                  <h1 className="text-white text-xl ">{card.heading}</h1>
                  <p className="text-richblack-400 font-bold mb-12 ">{card.description}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>

  );
}

export default GetInTouch;
