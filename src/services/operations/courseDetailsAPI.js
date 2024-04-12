import { toast } from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import { courseEndpoints } from "../apis";

const {
  COURSE_DETAILS_API,
  COURSE_CATEGORIES_API,
  GET_ALL_COURSE_API,
  CREATE_COURSE_API,
  EDIT_COURSE_API,
  CREATE_SECTION_API,
  CREATE_SUB_SECTION_API,
  UPDATE_SECTION_API,
  UPDATE_SUB_SECTION_API,
  DELETE_SECTION_API,
  DELETE_SUB_SECTION_API,
  GET_ALL_INSTRUCTOR_COURSES_API,
  GET_FULL_COURSE_DETAILS_AUTHENTICATED_API,
  CREATE_RATING_API,
  LECTURE_COMPLETION_API,
  DELETE_COURSE_API,
} = courseEndpoints;

export const getAllCourses = async () => {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    const response = await apiConnector("GET", GET_ALL_COURSE_API);
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Course Categories");
    }
    result = response?.data?.data;
  } catch (error) {
    console.log("GET_ALL_COURSE_API ERROR....", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

export const fetchCourseDetails = async (courseId) => {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    const response = await apiConnector("POST", COURSE_DETAILS_API, {
      courseId,
    });
    console.log("COURSE_DETAILS_API API RESPONSE............", response);

    if (!response?.data?.success) {
      throw new Error(response.data.message);
    }

    result = response.data;
  } catch (error) {
    console.log("FETCH_COURSE_DETAILS_API_ERROR", error);
    result = error.response.data;
    // toastId = toast.error(error.response.data.message)
  }

  toast.dismiss(toastId);
  //   dispatch(setLoading(false));
  return result;
};

export const fetchCourseCategories = async () => {
  let result = [];
  try {
    const response = await apiConnector("GET",COURSE_CATEGORIES_API);
    console.log("COURSE_API_RESPONSE_ERROR...", response);

    if (!response?.data?.success) {
      throw new Error("Could not fetch course Categories");
    }

    result = response?.data?.data;
  } catch (error) {
    console.log("COURSE_CATEGORIES_API_ERROR", error);
    toast.error(error.message);
  }
  return result;
};

export const addCourseDetails = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", CREATE_COURSE_API, data, {
      "Content-Type": "multipart/from-data",
      Authorization: `Bearer ${token}`,
    });

    console.log("CREATE COURSE API RESPONSE", response);

    if (!response?.data.success) {
      throw new Error("could  not create Course Details");
    }

    toast.success("Courses Details Added SuccessFully");
    result = response?.data?.data;
  } catch (error) {
    console.log("CREATE COURSE API ERROR", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

export const editCourseDetails = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", EDIT_COURSE_API, data, {
      "Content-Type": "multipart/from-data",
      Authorization: `Bearer ${token}`,
    });
    console.log("Edit Course Response API ", response);

    if (!response?.data?.success) {
      throw new Error("could not update course details");
    }
    toast.success("Course Updated SuccessFull");
    result = response?.data?.data;
  } catch (error) {
    console.log("edit course api error", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

export const createSection = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", CREATE_SECTION_API, data, {
      Authorization: `Bearer ${token}`,
    });

    console.log("create section response.... ", response);
    if (!response?.data?.success) {
      throw new Error("cloud not create  the section");
    }
    toast.success("course  Section Created Successfully");
    result = response?.data?.updateCourse;
  } catch (error) {
    console.log("create section error", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

// create a subsection
export const createSubSection = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", CREATE_SUB_SECTION_API, data, {
      Authorization: `Bearer ${token}`,
    });
    console.log("CREATE SUB-SECTION API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Add Lecture");
    }
    toast.success("Lecture Added");
    result = response?.data?.data;
  } catch (error) {
    console.log("CREATE SUB-SECTION API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

export const updateSection = async (data, token) => {
  const toastId = toast.loading("Loading...");
  let result = null;
  try {
    const response = await apiConnector("POST", UPDATE_SECTION_API, data, {
      Authorization: `bearer ${token}`,
    });
    console.log("Update section api response ", response);

    if (!response?.data?.success) {
      throw new Error("could not update section ");
    }
    toast.success("Course update Successful");
    result = response?.data?.data;
  } catch (error) {
    console.log("update section api response", error);
    toast.error(toastId);
  }
  toast.dismiss(toastId);
  return result;
};

export const updateSubSection = async (data, token) => {
  const toastId = toast.loading("Loading...");
  let result = null;
  try {
    const response = await apiConnector("POST", UPDATE_SUB_SECTION_API, data, {
      Authorization: `Bearer ${token}`,
    });
    console.log("update seb section api response", response);

    if (!response?.data?.success) {
      throw new Error("cloud  not update lecture");
    }

    toast.success("Lecture successful");
    result = response?.data?.data;
  } catch (error) {
    console.log("update sub-section api error", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

// delete a section
export const deleteSection = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", DELETE_SECTION_API, data, {
      Authorization: `Bearer ${token}`,
    });
    console.log("DELETE SECTION API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Delete Section");
    }
    toast.success("Course Section Deleted");
    result = response?.data?.data;
  } catch (error) {
    console.log("DELETE SECTION API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};
// delete a subsection
export const deleteSubSection = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", DELETE_SUB_SECTION_API, data, {
      Authorization: `Bearer ${token}`,
    });
    console.log("DELETE SUB-SECTION API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Delete Lecture");
    }
    toast.success("Lecture Deleted");
    result = response?.data?.data;
  } catch (error) {
    console.log("DELETE SUB-SECTION API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

// fetching all courses under a specific instructor
export const fetchInstructorCourses = async (token) => {
  let result = [];
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector(
      "GET",
      GET_ALL_INSTRUCTOR_COURSES_API,
      null,
      {
        Authorization: `Bearer ${token}`,
      }
    );
    console.log("INSTRUCTOR COURSES API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Instructor Courses");
    }
    result = response?.data?.data;
  } catch (error) {
    console.log("INSTRUCTOR COURSES API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

// delete a course
export const deleteCourse = async (data, token) => {
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("DELETE", DELETE_COURSE_API, data, {
      Authorization: `Bearer ${token}`,
    });
    console.log("DELETE COURSE API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Delete Course");
    }
    toast.success("Course Deleted");
  } catch (error) {
    console.log("DELETE COURSE API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
};

// get full details of a course
export const getFullDetailsOfCourse = async (courseId, token) => {
  const toastId = toast.loading("Loading...");
  //   dispatch(setLoading(true));
  let result = null;
  try {
    const response = await apiConnector(
      "POST",
      GET_FULL_COURSE_DETAILS_AUTHENTICATED_API,
      {
        courseId,
      },
      {
        Authorization: `Bearer ${token}`,
      }
    );
    console.log("COURSE_FULL_DETAILS_API API RESPONSE............", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    result = response?.data?.data;
  } catch (error) {
    console.log("COURSE_FULL_DETAILS_API API ERROR............", error);
    result = error.response.data;
    // toast.error(error.response.data.message);
  }
  toast.dismiss(toastId);
  //   dispatch(setLoading(false));
  return result;
};

// mark a lecture as complete
export const markLectureAsComplete = async (data, token) => {
  let result = null;
  console.log("mark complete data", data);
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", LECTURE_COMPLETION_API, data, {
      Authorization: `Bearer ${token}`,
    });
    console.log(
      "MARK_LECTURE_AS_COMPLETE_API API RESPONSE............",
      response
    );

    if (!response.data.message) {
      throw new Error(response.data.error);
    }
    toast.success("Lecture Completed");
    result = true;
  } catch (error) {
    console.log("MARK_LECTURE_AS_COMPLETE_API API ERROR............", error);
    toast.error(error.message);
    result = false;
  }
  toast.dismiss(toastId);
  return result;
};

// create a rating for course
export const createRating = async (data, token) => {
  const toastId = toast.loading("Loading...");
  let success = false;
  try {
    const response = await apiConnector("POST", CREATE_RATING_API, data, {
      Authorization: `Bearer ${token}`,
    });
    console.log("CREATE RATING API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Create Rating");
    }
    toast.success("Rating Created");
    success = true;
  } catch (error) {
    success = false;
    console.log("CREATE RATING API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return success;
};
