import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserEnrolledCourses } from "../../../services/operations/ProfileAPI";
import ProgressBar from '@ramonak/react-progress-bar';
function EnrolledCourses() {
  const {token}  = useSelector((state) => state.auth);
  // const { token } = useSelector((state) => state.profile);
  const [enrolledCourses, setEnrolledCourses] = useState(null);

  const getEnrolledCourses = async () => {
    try {
      const response = await getUserEnrolledCourses(token);
      setEnrolledCourses(response);
    } catch (error) {
      console.log("Unable to Fetch Enrolled Courses");
    }
  };

  useEffect(()=> {
    getEnrolledCourses();
},[]);

  return (
    <div className="text-white ">
      <h1>Enrolled Courses</h1>
      {!enrolledCourses ? (
        <div className="spinner">Loading...</div>
      ) : !enrolledCourses.length ? (
        <div>you have not enrolled any Courses yet</div>
      ) : (
        <div>
          <div>
            <p>Course Name</p>
            <p>Durations</p>
            <p>Progress</p>
          </div>
          {enrolledCourses.map((course, index) => {
            <div>
              <div>
                <img src={course.thumbnail} />
                <div>
                  <p>{course.courseName}</p>
                  <p>{course.courseDescription}</p>
                </div>
              </div>

               <div>
                {course?.totalDuration}
               </div>

               <div>
                <p>
                  Progress : {course.progressPercentage || 0 }%
                </p>
                <ProgressBar
                                        completed={course.progressPercentage || 0}
                                        height='8px'
                                        isLabelVisible={false}
                                        />
               </div>

            </div>;
          })}
        </div>
      )}
    </div>
  );
}

export default EnrolledCourses;
