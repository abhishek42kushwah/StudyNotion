import React from 'react'
import ImageBack from "../../assets/Images/FoundingStory.png"
function Para() {
  return (
    <div>
      <div className='bg-richblack-900 pt-32 pb-36  '>
        <div className=" w-11/12 mx-auto flex justify-between items-center  ">
          <div className='w-6/12 '>
            <h1 className=" text-4xl my-9 text-red font-bold ">Our Founding Story</h1>
            <p className="text-richblack-400 my-10 font-bold ">
              Our e-learning platform was born out of a shared vision and passion
              for transforming education. It all began with a group of educators,
              technologists, and lifelong learners who recognized the need for accessible,
              flexible, and high-quality learning opportunities in a rapidly evolving digital world.
            </p>

            <p className="text-richblack-400 font-bold" >
              As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems.
              We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries.
              We envisioned a p.
              platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.
            </p>

          </div>

          <div className='pt-10' >
            <img src={ImageBack} />
          </div>
        </div>


        <div className='flex mx-auto mt-[20%] justify-between items-center w-11/12 '>
          <div className='w-5/12'>
            <h1 className='text-4xl mt-6 text-[#F77B22] '>Our vision </h1>
            <p className='font-bold text-richblack-400 pt-10'>
              With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.
            </p>
          </div>
          <div className='w-5/12'>

            <h1 className='text-[#24DDF4] text-4xl mt-6 '>Our Mission</h1>
            <p className='font-bold text-richblack-400 pt-10'>Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.

            </p>

          </div>
        </div>

      </div>

      <div className='bg-richblack-700 w-11/12 h-[120px] flex justify-around items-center  '>
        <div className='flex justify-center flex-col items-center'>
          <p className='font-bold text-3xl text-white '>5K</p>
          <p className='text-richblack-400 font-bold pt-1'>
            Active Students
          </p>
        </div>
        <div>
          <p className='font-bold text-3xl text-white'>10+</p>
          <p className='text-richblack-400 font-bold pt-1'>
            Mentors
          </p>
        </div>
        <div>
          <p className='font-bold text-3xl text-white'>200+</p>
          <p className='text-richblack-400 font-bold ml-2 pt-1'>
            courses
          </p>
        </div>
        <div>
          <p className='font-bold text-3xl text-white'>50+</p>
          <p className='text-richblack-400 font-bold pt-1'>
            Awards
          </p>
        </div>



      </div>
    </div>
  )
}

export default Para