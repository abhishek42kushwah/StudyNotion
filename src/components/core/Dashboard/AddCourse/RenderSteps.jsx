import React from "react";
import { useSelector } from "react-redux";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import CourseInformationFrom from "./CourseInformationFrom"
import CourseBuilderForm from "./CourseBuilderForm"
import PublishCourse from "./PublishCourse"
function RenderSteps() {
  const { step } = useSelector((state) => state.course);

  const steps = [
    {
      id: 1,
      title: "Course information",
    },
    {
      id: 2,
      title: "Course Builder",
    },
    {
      id: 3,
      title: "Publish ",
    },
  ];
  return (
<>
<div>
<div>
      {steps.map((item, i) => (
        <div>
          <div key={i}
            className={`${
              step === item.id
                ? " text-richblack-600 border-yellow-25 bg-yellow-25 "
                : "bg-richblack-700 border-richblack-400 text-richblack-300"
            }`}
          >
            {step > item.id ? <IoCheckmarkDoneCircle  /> : item.id}
          </div>
        </div>
      ))}
    </div>


    <div>
        {steps.map((item,i)=>(
            <div key={i}>
                <div>
                    {item.title}
                </div>
            </div>
        ))}
    </div>

    {step === 1 && <CourseInformationFrom />}
    {step === 2 && <CourseBuilderForm />}
    {step === 3 && <PublishCourse />}

</div>
</>
  );
}

export default RenderSteps;
