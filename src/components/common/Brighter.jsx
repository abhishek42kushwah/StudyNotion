import React from 'react'
import aboutus1 from "../../assets/Images/aboutus1.webp"
import aboutus2 from "../../assets/Images/aboutus2.webp"
import aboutus3 from "../../assets/Images/aboutus3.webp"
import HomeHightLightText from "../../components/core/HomePages/HomeHightLightText"
function Brighter() {
  return (
    <div className=' h-[490px] flex justify-center items-center  flex-col gap-y-3 pt-48 '>
        <div className='  text-4xl font-semibold  '>
            <h1 className=' text-white'>
            Driving Innovation in Online Education for a
            </h1>
            <h3 className='font-semibold flex  items-center justify-center '><HomeHightLightText text="Brighter Future" /></h3>
        </div>
            <h3 className='text-richblack-300 w-[850px] mx-auto text-center mb-10 font-bold '>StudyNotion is at the forefront of driving innovation in online education. We're passionate about creating a
             brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.</h3>
   
   <div className='flex gap-x-8 '>
    
    <img src={aboutus1} width={390}  />
    <img src={aboutus2} width={390} />
    <img src={aboutus3} width={390} />
   </div>
    </div>
  )
}

export default Brighter