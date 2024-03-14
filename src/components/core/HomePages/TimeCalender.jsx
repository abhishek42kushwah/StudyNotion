import React from "react";
import HomeHightLightText from "./HomeHightLightText";
import PageTwo from "../../../assets/Images/Compare_with_others.png";
import PageOne from "../../../assets/Images/Know_your_progress.png";
import PageThree from "../../../assets/Images/Plan_your_lessons.png";
import CTAButton from "../HomePages/Button";
import { FaArrowRight } from "react-icons/fa";
import InstructorPng from "../../../assets/Images/Instructor.png"
function TimeCalender() {
  return (
    <div className="bg-pure-greys-5  text-richblack-700">
      <div className="w-11/12  mx-auto flex items-center flex-col text-[#2C333F] ">
        <div className="text-4xl  font-bold ">
          Your swiss knife for{" "}
          <HomeHightLightText text={"learning any language"} />
        </div>
        <div className=" mx-auto pt-5 w-[850px]">
          Using spin making learning multiple languages easy. with 20+ languages
          realistic voice-over, progress tracking,
        </div>
        custom schedule and more.
      </div>

      <div className=" w-11/12 mx-auto pt-[60px] ">
        <div className="flex items-center left-14 relative flex-row">
          <div className="ml-[10px] ">
            <img src={PageOne} />
          </div>
          <div className="absolute ml-[300px]">
            <img src={PageTwo} />
          </div>
          <div className="absolute ml-[650px]">
            <img src={PageThree} />
          </div>
        </div>
      </div>

      <div className="w-[120px] pt-16 pb-16 mx-auto">
        <CTAButton active={true} linkTo={"./signup"}>
          Learn More
        </CTAButton>
      </div>


      <div className="flex flex-row bg-richblack-900  ">
      <div className="w-11/2 mx-auto flex pt-20 pl-20 ">
<div className="w-[45%] shadow-[12px_0_0_12px] shadow-white " >
<img src={InstructorPng} />
  
</div>
<div className="w-[40%] flex flex-col justify-center pl-6 ml-8 ">
  <p className="text-4xl font-bold text-white">Become an</p>
  <div className="text-4xl font-bold">
  <HomeHightLightText text={"instructor"} />
  </div>
  <p className="text-richblack-300 font-bold my-10">
  Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
  </p>
  <div className=" flex items-center">

  <CTAButton active={true} linkTo={"./signup"}>
  <div className="flex items-center gap-4 font-bold text-[16px]">
  Start Teaching Today 
    <FaArrowRight/>
  </div>
  </CTAButton>
</div>
</div>

</div>
      </div>
    </div>
  );
}

export default TimeCalender;
