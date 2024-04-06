import { toast } from "react-hot-toast";
import { setLoading, setUser } from "../../Slice/profileSlice";
import { apiConnector } from "../apiconnector";
import { logout } from "./authAPI";
import { profileEndpoints } from "../apis";

const { GET_USER_ENROLLED_COURSES_API, GET_USER_DETAILS_API } =
  profileEndpoints;

export function getUserDetails(navigate, token) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading User Details...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("GET", GET_USER_DETAILS_API, null, {
        Authorization: ` Bearer ${token}`,
      });
      console.log("GET_USER_DETAILS_API RESPONSE", response);

      if (response.data.success) {
        throw new Error(response.data.message);
      }

      const userImage = response.data.data.image
        ? response.data.data.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.data.firstName} ${response.data.data.lastName}`;
      dispatch(setUser({ ...response.data.data, image: userImage }));
    } catch (error) {
      dispatch(logout(navigate));
      console.log("GET_USER_DETAILS_API ERROR >>>", error);
      toast.error("Could not get user details");
    }
    toast.dismiss(toastId);
    dispatch(setLoading(false));
  };
}

export async function getUserEnrolledCourses(token) {
  const toastId = toast.loading("loading...");
  let result = [];
  try {
    console.log("BEFORE Calling BACKEND API FOR ENROLLED COURSES");
    const response = await apiConnector(
      "GET",
      GET_USER_ENROLLED_COURSES_API,
      null,
      { Authorisation: `Bearer ${token}` }
    );
    console.log("AFTER Calling BACKEND API FOR ENROLLED COURSES");
    console.log("response here ", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    result = response.data.data;
  } catch (error) {
    console.log("GET_USER_ENROLLED_COURSES_API API ERROR............", error);
    toast.error("Could Not Get Enrolled Courses");
  }
  toast.dismiss(toastId);
  return result;
}
