import React from 'react'
import RenderSteps from "./RenderSteps"
import { AiFillThunderbolt } from "react-icons/ai";

 
function AddCourse() {
  return (
    <div className='mx-auto text-white w-11/12'>
      <div className='mx-10'>
        <h1 className='text-white text-4xl font-semibold'>AddCourse</h1>
        <div className='flex gap-x-6 mt-6'>
        <div>
        <RenderSteps  />
        </div>
        <div className='bg-richblack-800 w-[450px] rounded-md border-[1px] border-richblack-400 p-6'>
        <div className='flex gap-x-1   '>
        <AiFillThunderbolt  className='text-yellow-50' size={24} />
        <p className='text-xl'>Code Upload Tips</p>
        </div>
           <ul> <li>Set the Course Price option or make it free.</li>
            <li>Standard size for the course thumbnail is 1024x576.</li>
            <li>Video section controls the course overview video.</li>
            <li>Course Builder is where you create & organize a course.</li>
            <li>
              Add Topics in the Course Builder section to create lessons,
              quizzes, and assignments.
            </li>
            <li>
              Information from the Additional Data section shows up on the
              course single page.
            </li>
            <li>Make Announcements to notify any important</li>
            <li>Notes to all enrolled students at once.</li>
           </ul>

        </div>
        </div>
      </div>
    </div>
)
}

export default AddCourse;
