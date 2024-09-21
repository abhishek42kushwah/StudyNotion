import { toast } from "react-hot-toast";
import { setUser } from "../../Slice/profileSlice";
import { apiConnector } from "../apiconnector";
import { settingsEndpoints } from "../apis";
import { logout } from "./authAPI";

const {
  UPDATE_DISPLAY_PICTURE_API,
  UPDATE_PROFILE_API,
  CHANGE_PASSWORD_API,
  DELETE_PROFILE_API,
} = settingsEndpoints;

export function updateDisplayPicture(token, fromData) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiConnector(
        "PUT",
        UPDATE_DISPLAY_PICTURE_API,
        fromData,
        {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        }
      );

      console.log("UPDATE_DISPLAY_PICTURE_API_RESPONSE", response);

      if (!response?.data?.success) {
        throw new Error(response.data.message);
      }
      toast.success("Display picture update successful");
      dispatch(setUser(response.data.data));
    } catch (error) {
      console.log("UPDATE_DISPLAY_PICTURE_API_ERROR", error);

      toast.error("Could Not Update Display Picture");
    }
    toast.dismiss(toastId);
  };
}

export function updateProfile(token, fromData) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiConnector("PUT", UPDATE_PROFILE_API, fromData, {
        Authorization: `Bearer ${token}`,
      });
      console.log("UPDATE_PROFILE_API_RESPONSE", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      const userImage = response.data.updatedUserDetails.image
        ? response.data.updateUserDetails.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.updatedUserDetails.firstName} ${response.data.updatedUserDetails.lastName}`;

      dispatch(
        setUser({ ...response.data.updatedUserDetails, image: userImage })
      );
      toast.success("Profile Updated SuccessFully");
    } catch (error) {
      console.log("UPDATE_PROFILE_API_ERROR", error);
      toast.error("Something went wrong while updating profile.");
    }
    toast.dismiss(toastId);
  };
}

export  async function changePassword(token,fromData){
const toastId = toast.loading("Loading...")
try {
    const response = await apiConnector("POST",CHANGE_PASSWORD_API,fromData,{
        Authorization :` Bearer  ${token}`
    })
    console.log("CHANGE_PASSWORD_API_RESPONSE",response);

   if(!response.data.success){ 
    throw new Error(response.data.message)
   }

   toast.success("Change password SuccessFully")
} catch (error) {
    console.log("CHANGE_PASSWORD_API_ERROR",error);
    toast.error(error.response.data.message)
}
toast.dismiss(toastId)
}

export  function deleteProfile(token,navigate){
  return async(dispatch)=> {
        const toastId = toast.loading("Loading...")
        try {
          const response = await apiConnector("DELETE", DELETE_PROFILE_API, null, {
            Authorization: `Bearer ${token}`,
          })
          console.log("DELETE_PROFILE_API API RESPONSE............", response)
    
          if (!response.data.success) {
            throw new Error(response.data.message)
          }
          toast.success("Profile Deleted Successfully")
          dispatch(logout(navigate))
        } catch (error) {
          console.log("DELETE_PROFILE_API API ERROR............", error)
          toast.error("Could Not Delete Profile")
        }
        toast.dismiss(toastId)
      }
}