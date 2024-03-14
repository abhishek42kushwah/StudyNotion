import React from "react";
import CTAButton from "./Button";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

function CodeSection({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  Codeblock,
  background,
  codeColor,
}) {
  return (
    <div className={`flex ${position} gap-8 justify-between my-20 `}>
      {/* section 1 */}
      <div className="w-[50%] flex flex-col gap-6 ">
        {heading}
        <div className="text-richblack-900 font-bold">{subheading}</div>

        <div className="gap-7 flex mt-10 ">
          <CTAButton active={ctabtn1.active} linkTo={ctabtn1.linkTo}>
            <div className="flex gap-2 text-center">
              {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>

          <CTAButton active={ctabtn2.active} linkTo={ctabtn2.linkTo}>
            <div>{ctabtn2.btnText}</div>
          </CTAButton>
        </div>
      </div>

      {/* section 2 */}
      <div className="h-fit flex flex-row  text-[17px] w-[100%] border-[2px] border-opacity-[80%] border-richblack-600  py-3 lg:w-[500px] ">
        {/* bg-gradient  */}
        <div className="w-[10%] text-center flex flex-col text-richblack-400 front-inter font-bold ">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
        </div>

        <div
          className={`w-[90%] flex flex-col ${codeColor} gap-2 font-bold font-mono pr-2 `}
        >
          <TypeAnimation
            sequence={[Codeblock, 1500, ""]}
            repeat={Infinity}
            cursor={true}
            style={{
              whiteSpace: "pre-line",
              display: "block",
            }}
            omitDeletionAnimation={true}
          />
        </div>
      </div>
    </div>
  );
}

export default CodeSection;
