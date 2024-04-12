import React from "react";
import { MdOutlineElectricBolt } from "react-icons/md";
import RenderSteps from "./RenderSteps";
function AddCourse() {
  return (
    <div className="text-white">
      <div>
        <h1 className="text-3xl font-bold">Add Course</h1>
        <div className="flex">
          <div>
            <RenderSteps />
          </div>
          <div className="border-2 border-richblack-800 bg-richblack-800 space-y-1 w-[40%] min-w-200px rounded-md p-3 ml-2 pl-3 ">
            <h1 className="flex space-x-1  items-center text-xl ">
              <MdOutlineElectricBolt color="yellow" />
              Course upload Tips
            </h1>

            <li>Set the course price and make it free.</li>
            <li>Standard size for course thumbnail is 1024⨯578.</li>
            <li>Video section controls the course overview video.</li>
            <li>Course Builder is where you create & organize a course.</li>
            <li>
              Add Topics in the Course Builder section to create lessons,
              quizzes, and assignments.
            </li>
            <li>
              information form Additional Data section shows up on the courses
              single page.
            </li>
            <li>Make Announcement to notify any important.</li>
            <li>Notices to all enrolled students at once.</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCourse;
