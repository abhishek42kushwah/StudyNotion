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
  COURSE_PAYMENT_API: BASE_URL + "/payment/capturePayment",
  COURSE_VERIFY_API: BASE_URL + "/payment/verifySignature",
  SEND_PAYMENT_SUCCESS_EMAIL_API: BASE_URL + "/payment/sendPaymentSuccessEmail",
};
// RATINGS AND REVIEWS
export const ratingsEndpoints = {
  REVIEWS_DETAILS_API: BASE_URL + "/course/getReviews",
};
// CATALOG PAGE DATA
export const catalogData = {
  CATALOG_PAGE_DATA_API: BASE_URL + "/course/getCategoryPageDetails",
};
// CONTACT-US API
export const contactUsEndpoints = {
  CONTACT_US_API: BASE_URL + "/reach/contact",
};

// SETTINGS PAGE API
export const settingsEndpoints = {
  UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/updateDisplayPicture",
  UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
  CHANGE_PASSWORD_API: BASE_URL + "/auth/changePassword",
  DELETE_PROFILE_API: BASE_URL + "/profile/deleteProfile",
};
// COURSE ENDPOINTS
export const courseEndpoints = {
    GET_ALL_COURSE_API : BASE_URL+"/course/getAllCourses",
    COURSE_DETAILS_API : BASE_URL+"/course/getCourseDetails",
    EDIT_COURSE_API : BASE_URL+"/course/editCourse",
    COURSE_CATEGORIES_API : BASE_URL+"/course/showAllCategory",
    CREATE_COURSE_API : BASE_URL+"/course/createCourse",
    CREATE_SECTION_API : BASE_URL+"/course/addSection",
    CREATE_SUB_SECTION_API :BASE_URL+"/course/addSubSection" ,
    UPDATE_SECTION_API : BASE_URL+"/course/updateSection",
    UPDATE_SUB_SECTION_API : BASE_URL+"/course/updateSubSection",
    GET_ALL_INSTRUCTOR_COURSES_API : BASE_URL+"/course/getInstructorCourses",
    DELETE_SECTION_API:BASE_URL+"/course/deleteSection",
    DELETE_SUB_SECTION_API :BASE_URL+"/course/deleteSubSection",
    DELETE_COURSE_API : BASE_URL+"/course/deleteCourse",
    GET_FULL_COURSE_DETAILS_AUTHENTICATED_API : BASE_URL+"/course/getFullCourseDetails",
    LECTURE_COMPLETION_API : BASE_URL+"/course/updateCourseProgress",
    CREATE_RATING_API : BASE_URL+"/course/createRating",
 }