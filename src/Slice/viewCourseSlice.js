import { createSlice } from "reduxjs/toolkit";

const initialState = {
  courseSectionData: [],
  courseEntireData: [],
  completedLectures: [],
  totalNoLectures: 0,
};


const viewCourseSlice = createSlice({
    name: "viewCourse",
    initialState,
    reducers:{
       setSectionCourseData :(state,action)=>{
        state.courseSectionData = action.payload
       },
       serEntireCourseData:(state,action)=>{
        state.courseEntireData = action.payload
       },
       setCompletedLectures:(state,action) =>{
        state.completedLectures =action.payload
       },
       setTotalNoOfLectures:(state,action)=>{
        state.totalNoLectures = action.payload
       },
       updateCompletedLectures:(state,action)=>{
        state.completedLectures = [...state.completedLectures,action.payload]
       }
    }
})

export const {
    setCourseSectionData,
    serEntireCourseData,
    setCompletedLectures,
    setTotalNoOfLectures,
    updateCompletedLectures,
}
=viewCourseSlice.action

export default viewCourseSlice.reducer