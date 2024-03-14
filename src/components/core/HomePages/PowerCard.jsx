import React, { useState } from 'react';
import {HomePageExplore} from "../../../data/homepage-explore.js";
import HomeHightLightText from "../HomePages/HomeHightLightText";
import CourseCard from "../HomePages/CourseCard";
const tag = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths",
];  

function PowerCard() {

const [currentTab,setCurrentTab] = useState(tag[0])
const [currentCourse,setCurrentCourse ] = useState(HomePageExplore[0].courses);
const [currentCard,setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);

const setCard = (value) =>{
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
        setCurrentCourse(result[0].courses);
        
    
        setCurrentCard(result[0].courses[0].heading);
    }




  return (
    <div className=''>
      <div className='items-center flex flex-col justify-center'>
           <div className='text-4xl font-bold flex-col items-center'>
           Unlock the  <HomeHightLightText text={"Power of Code"} />
           </div>
           <p className='text-richblack-300 font-bold text-xl pt-2'>
           Learn to Build Anything You Can Imagine
           </p>
      </div>

      <div className='flex mt-5 flex-row rounded-full bg-richblack-800 mb-5 border-richblack-100 px-2 py-2'>
        {tag.map((ele,index) =>{
             return <div className={`flex flex-row 
             font-bold gap-10 ${currentTab === ele ? "bg-richblack-900 text-richblack-5   font-medium " : " text-richblack-200 "} 
               rounded-full px-7 py-2 transition-all duration-200 
               cursor-pointer hover:bg-richblack-900
                hover:text-richblack-5 }`} key={index} onClick={()=> setCard(ele)}>
              {ele}
             </div>
        })}
      </div>  
      <div className='lg:h-[150px] relative '>
      </div>

      <div className='absolute  right-[0%] flex gap-10 justify-between w-full items-center'>
<div className='flex flex-row gap-10 pt-[3rem] justify-between absolute'>
{
          currentCourse.map((ele,index)=>{
            return (
              <CourseCard key={index}
               cardData={ele} 
               currentCard={currentCard} 
               setCurrentCard={setCurrentCard} />
            )
          })
        }
</div>
      </div>


    </div>

  )
}
export default PowerCard ; 
