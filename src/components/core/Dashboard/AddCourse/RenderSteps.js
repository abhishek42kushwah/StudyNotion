import React from "react";
import { useSelector } from "react-redux";
import {FaCheck} from "react-icons/fa" 
import CourseInformationPage from "../AddCourse/CourseInformation/CourseInformationForm"
import CourseBuilderPage from "../AddCourse/CourseBuilderPage/CourseBuilderPage";
import PublishPage from "../AddCourse/PublishPage/PublishPage";
function RenderSteps() {
  const { step } = useSelector((state) => state.course);
  const steps = [
    {
      id: 1,
      title: "Course Information",
    },
    {
      id: 2,
      title: "Course Builder",
    },
    {
      id: 3,
      title: "Publish",
    },
  ];

  return (
    <div>
      <div>
        {steps.map((item) => (
          <>
            <div>
              <div
                className={`${
                  step === item.id
                    ? "text-richblack-900 border-yellow-50 bg-yellow-600"
                    : "border-richblack-700 bg-richblack-800 text-richblack-300 "
                }`}
              >
                {step > item.id ? <FaCheck /> : item.id}
              </div>
            </div>
            {item.id !== steps.length 
            }
          </>
        ))}
      </div>
      <div>
        {steps.map((item) => (
          <div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      {step === 1 && <CourseInformationPage />}
      {/* {step === 2 && <CourseBuilderPage />}
      {step === 3 && <PublishPage />} */}
    </div>
  );
}

export default RenderSteps;
