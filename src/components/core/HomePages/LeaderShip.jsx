import React from "react";
import logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import learningImage from "../../../assets/Images/TimelineImage.png";
function LeaderShip() {
  const TimeLine = [
    {
      heading: "Leadership",
      logo: logo1,
      Description: "Fully committed to the success company",
    },
    {
      heading: "Responsibility",
      logo: logo2,
      Description: "Students will always be our top priority",
    },

    {
      heading: "Flexibility",
      logo: logo3,
      Description: "The ability to switch is in important skills",
    },

    {
      heading: "Solve the problem",
      logo: logo4,
      Description: "Code your way to a solution",
    },
  ];

  return (
    <div>
      <div className="flex flex-row gap-16 items-center">
        <div className="w-[45%] flex flex-col">
          {TimeLine.map((element, index) => {
            return (
              <div className="flex flex-row gap-6" key={index}>
                <div>
                  <div className="w-[60px]  h-[60px] bg-white flex rounded-full items-center justify-center">
                    <img src={element.logo} alt="Logo" />
                  </div>
                  <div className="border rotate-90 my-[40px] border-dotted  opacity-30 "></div>
                </div>

                <div className="">
                  <p className="font-bold">{element.heading}</p>
                  <p>{element.Description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-[50%] flex relative -top-12 items-end justify-center bg-white pb-[2rem] pr-[2rem] ">
          <img src={learningImage} />

          <div className="w-[90%]  bg-[#014A32] absolute items-center -bottom-4  justify-center h-[20%] ">
            <div className="flex flex-row pt-5 justify-center uppercase">
              <div className="flex flex-row gap-12">
                <p className="text-white  font-bold text-[35px]">10</p>
                <div className="text-[#05A77B]  ">
                  <p>Year</p>
                  <p>experience</p>
                </div>
              </div>
              <div className="border ml-8 border-opacity-80 border-[#05A77B]"></div>
              <div className="flex flex-row ml-6 gap-12">
                <p className="text-white text-[35px] font-bold">250</p>
                <div className="text-[#05A77B]">
                  <p>types of</p>
                  <p>Courses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaderShip;
