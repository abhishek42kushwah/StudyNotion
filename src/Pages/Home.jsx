import React from "react";
import HomeHightLightText from "../components/core/HomePages/HomeHightLightText";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import CTAButton from "../components/core/HomePages/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeSection from "../components/core/HomePages/CodeSection";
import LeaderShip from "../components/core/HomePages/LeaderShip";
import TimeCalender from "../components/core/HomePages/TimeCalender";
import PowerCard from "../components/core/HomePages/PowerCard";
function Home() {
  return (
    <div>
      {/* Section 1  */}
      <div className=" h-[100%] relative mx-auto pt-[2rem] flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between">
        <Link to={"/signup"}>
          <div
            className="group mx-auto relative rounded-full bg-richblack-800 hover:bg-richblack-900 px-[3rem] py-[10px] font-bold text-richblack-200
 transition-all duration-200 hover:scale-95 w-fit border-b-[1px] hover:border-[4px] hover:border-richblack-800 "
          >
            <div className="flex flex-row gap-1 items-center ">
              Become an Instructor
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className="text-center text-4xl  font-semibold pt-[2rem]">
          Empower Your Future with
          <HomeHightLightText text={"Coding Skills"} />
        </div>

        <div className="text-richblack-200 font-bold text-lg w-11/12 text-center pt-5 ">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        <div className="flex flex-row gap-7 mt-8 ">
          <CTAButton active={true} linkTo={"/signup"}>
            Learn More
          </CTAButton>

          <CTAButton active={false} linkTo={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

        <div className="pt-10">
          <div className=" shadow-[12px_12px_0_0] shadow-white items-center  w-11/12 mx-auto  pb-[0rem] pr-[0rem] ">
            <video loop autoPlay muted>
              <source src={Banner} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* codeSection 1*/}
        <div className="w-11/12 mx-auto">
          <CodeSection
            position={"lg:flex-row "}
            heading={
              <div className="font-semibold text-4xl">
                Unlock your
                <HomeHightLightText text={"coding potential"} /> with our online
                courses.
              </div>
            }
            subheading={
              <div className="text-richblack-400">
                Our courses are designed and taught by industry experts who have
                years of experience in coding and are passionate x`about sharing
                their knowledge with you.
              </div>
            }
            ctabtn1={{
              btnText: "Try it YourSelf",
              linkTo: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkTo: "/signup",
              active: false,
            }}
            Codeblock={`<!DOCTYPE html>
        <html lang="en">
        <head>
        <title>This is myPage</title>
        </head>
        <body>
        <h1><a href="/">Header</a></h1>
        <nav><a href="/one">One</a><a href="/two">Two</a><a href="/three">Three</a>
        </nav>
        </body>`}
            codeColor={"text-yellow-25"}
          />
        </div>

        {/* codeSection 2*/}
        <div className="w-11/12 mx-auto  ">
          <CodeSection
            position={"lg:flex-row-reverse  "}
            heading={
              <div className="font-semibold  text-4xl">
                Start <HomeHightLightText text={`coding in seconds`} />
              </div>
            }
            subheading={
              <div className="text-richblack-400  ">
                Go ahead, give it a try. Our hands-on learning environment means
                you'll be writing real code from your very first lesson.
              </div>
            }
            ctabtn1={{
              btnText: "Continue Lesson ",
              linkTo: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkTo: "/signup",
              active: false,
            }}
            Codeblock={`import React from "react";
        import CTAButton from "./Button";
        import { TypeAnimation }from"react-type";
        import { FaArrowRight } from "react-icons/fa";   

        const Home ()=>{
          return (
            <div> HOME </div>
          )
        } 
        export default Home;`}
            codeColor={"text-pure-greys-5"}
          />
        </div>

<div>
  <PowerCard/>
</div>

      </div>

      {/* section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="home_bg h-[350px]">
          <div className="w-11/12 flex mx-auto justify-center text-white gap-5">
            <div className="flex flex-row pt-[215px] gap-7">
              <CTAButton active={true} linkTo={"/signup"}>
                <div className="flex flex-row items-center gap-2">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkTo={"/signup"}>
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="  w-11/12  pt-[80px]  mx-auto">
          <div className="flex flex-row justify-between">
            <div className="mx-auto text-4xl font-bold w-[550px] ">
              Get the skills you need for a{" "}
              <HomeHightLightText text={" job that is in demand."} />
            </div>
            <div className="flex flex-col ml-[80px]  gap-5">
              <div className="text-md w-[500px] ">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <div className="items-center pt-6 justify-start flex">
                <CTAButton active={true} linkTo={"/signup"}>
                  <div>Learn More</div>
                </CTAButton>
              </div>
            </div>
          </div>

          <div className="pt-14 flex justify-center">
            <LeaderShip />
          </div>
        </div>
      </div>

      {/* section 3 */}
      
             <div>
              <TimeCalender />
            </div>
      

      {/* footer */}
    </div>
  );
}

export default Home;
