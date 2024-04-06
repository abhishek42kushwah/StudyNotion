import React, { useEffect, useState } from 'react'
import {useSelector} from "react-redux"
import {getUserEnrolledCourses} from "../../../services/operations/ProfileAPI";
function EnrolledCourses() {
const {token} = useSelector ((state)=>state.auth)
const [enrolledCourses,setEnrolledCourses] = useState(null)
 
const getEnrolledCourses = async () =>{
  try {
    const response = await getUserEnrolledCourses(token)
    setEnrolledCourses(response)
  } catch (error) {
    console.log("Unable to Fetch Enrolled Courses");
  }
}


useEffect(()=> {
  getEnrolledCourses();
},[]);



  return (
    <div className='text-white'>
      <h1>Enrolled Courses</h1>
        { 
         !enrolledCourses ? (
          <div className='spinner'>
            Loading...
          </div>
) :
         (
          !enrolledCourses.length ? (<p>you have not enrolled in any course yet</p>) : 
        (<div>
          <div>
            <p>Course Name</p>
            <p>
              Durations
            </p>
            <p>
              Progress
            </p>
          </div>
        </div>)

         )
        }
       
  

    </div>
  )
}

export default EnrolledCourses
