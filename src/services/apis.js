const BASE_URL = process.env.REACT_APP_BASE_URL;

// AUTH ENDPOINTS
export const endpoints = {
  LOGIN_API: BASE_URL + "/auth/login",
  SIGNUP_API: BASE_URL + "/auth/signup",
  SEND_OTP_API: BASE_URL + "/auth/sendOTP",
  RESET_PASS_TOKEN_API: BASE_URL + "/auth/reset-Password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-Password",
};

// CATAGORIES API
export const categories = {
  CATEGORIES_API: BASE_URL + "/course/showAllCategory",
};
// PROFILE ENDPOINTS
export const profileEndpoints = {
  GET_ENROLLED_COURSES_API: BASE_URL + "/profile/getEnrollmentCourse",
  GET_USER_DETAILS_API: BASE_URL + "/profile/getAllUsersDetails",
};
// STUDENTS ENDPOINTS
export const studentEndpoints = {
  COURSE_PAYMENT_API: BASE_URL + "",
  COURSE_VERIFY_API: BASE_URL + " ",
  SEND_PAYMENT_SUCCESS_EMAIL_API: BASE_URL + "",
};
// RATINGS AND REVIEWS
export const ratingsEndpoints = {
  REVIEWS_DETAILS_API: BASE_URL + "",
};
// CATALOG PAGE DATA
export const catalogData = {
  CATALOG_PAGE_DATA_API: BASE_URL + "",
};
// CONTACT-US API
export const contactUsEndpoints = {
  CONTACT_US_API: BASE_URL + "",
};

// SETTINGS PAGE API
export const settingsEndpoints = {
  UPDATE_DISPLAY_PICTURE_API: BASE_URL + "",
  UPDATE_PROFILE_API: BASE_URL + "",
  CHANGE_PASSWORD_API: BASE_URL + "",
  DELETE_PROFILE_API: BASE_URL + "",
};
// COURSE ENDPOINTS
export const courseEndpoints = {
    GET_ALL_COURSE_API : BASE_URL+"",
    COURSE_DETAILS_API : BASE_URL+"",
    EDIT_COURSE_API : BASE_URL+"",
    COURSE_CATEGORIES_API : BASE_URL+"",
    CREATE_COURSE_API : BASE_URL+"",
    CREATE_SECTION_API : BASE_URL+"",
    CREATE_SUB_SECTION_API :BASE_URL+"" ,
    UPDATE_SECTION_API : BASE_URL+"",
    UPDATE_SUB_SECTION_API : BASE_URL+"",
    GET_ALL_INSTRUCTOR_COURSES_API : BASE_URL+"",
    DELETE_SECTION_API:BASE_URL+"",
    DELETE_SUB_SECTION_API :BASE_URL+"",
    DELETE_COURSE_API : BASE_URL+"",
    GET_FULL_COURSE_DETAILS_AUTHENTICATED_API : BASE_URL+"",
    LECTURE_COMPLETION_API : BASE_URL+"",
    CREATE_RATING_API : BASE_URL+"",
 }