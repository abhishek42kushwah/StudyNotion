import React from 'react'
import ImageBack from "../../assets/Images/FoundingStory.png"
function Para() {
  return (
    <div className='bg-richblack-900 pt-32 '>
        <div className=" w-11/12 mx-auto flex justify-between items-center  ">
        <div className='w-6/12 gap-y-6'> 
        <h1 className="text-white text-3xl">our Founding Story</h1>
        <p className="text-richblack-400">
        Our e-learning platform was born out of a shared vision and passion
         for transforming education. It all began with a group of educators,
          technologists, and lifelong learners who recognized the need for accessible,
           flexible, and high-quality learning opportunities in a rapidly evolving digital world.
        </p>

        <p className="text-richblack-400" >
        As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems.
         We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries.
         We envisioned a p.
         latform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.
        </p>

        </div>

        <div>
    <img src={ImageBack} />
        </div>
      </div>
    </div>
  )
}

export default Para