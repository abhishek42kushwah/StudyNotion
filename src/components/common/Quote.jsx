import React from "react";
import HomeHightLightText from "../core/HomePages/HomeHightLightText";
function Quote() {
  return (
    <div>
      <div className="pt-40 bg-richblack-900  ">
        <div className="text-white  mx-auto font-semibold text-4xl flex items-center justify-center ">
          <div className="w-11/12  ">
            <div className="justify-center items-center flex ">
              We are passionate about revolutionizing the way we learn. Our
            </div>{" "}
            innovative platform
            <HomeHightLightText text="combines technology" />,
            <span className="text-yellow-100">expertise,</span>and community to
            <div className="flex justify-center items-center gap-x-2">
              create an
              <span className="text-yellow-100">
                {" "}
                unparalleled educational experience.
              </span>
            </div>
          </div>
        </div>
        <div className=" border border-richblack-700 mt-24 "></div>
      </div>
      
    </div>
  );
}

export default Quote;
