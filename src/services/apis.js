const BASE_URL =    process.env.REACT_APP_BASE_URL 


export const endpoints = {
    LOGIN_API:BASE_URL +"/auth/login",
    SIGNUP_API:BASE_URL+"/auth/signup",
    SEND_OTP_API: BASE_URL+"/auth/sendOTP" ,
    RESET_PASS_TOKEN_API :  BASE_URL+"/auth/reset-Password-token",
    RESETPASSWORD_API:  BASE_URL+"/auth/reset-Password",
}

export const categories ={
    CATEGORIES_API: BASE_URL +  "/course/showAllCategory"
};
  
export const  profileEndpoints = {
    GET_USER_ENROLLED_COURSES_API : BASE_URL+"/profile/getEnrollmentCourse",
    GET_USER_DETAILS_API : BASE_URL+"/profile/getAllUsersDetails"
}