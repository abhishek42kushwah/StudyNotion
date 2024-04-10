import { toast } from "react-hot-toast";
import { setLoading, setToken } from "../../Slice/authSlice";
import { resetCart } from "../../Slice/cartSlice";
import { setUser } from "../../Slice/profileSlice";
import { apiConnector } from "../apiconnector";
import { endpoints } from "../apis";
import { configureStore } from "@reduxjs/toolkit";

const {
  SEND_OTP_API,
  SIGNUP_API,
  LOGIN_API,
  RESET_PASS_TOKEN_API,
  RESETPASSWORD_API,
} = endpoints;



export function signUp(
    accountType,
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    otp,
    navigate){
        return async(dispatch)=>{
            const toastId = toast.loading("loading")
            dispatch(setLoading(true))
            try {
                
                const response = await apiConnector("POST",SIGNUP_API,{
                    accountType,
                    firstName,
                    lastName,
                    email,
                    password,
                    confirmPassword,
                    otp
                })

                console.log("SignUp Api Response" , response);

                if(!response){
                    throw new Error(response.data.message)
                }

                toast.success("SignUp SuccessFul")
                navigate("/login")

            } catch (error) {
                console.log("SIGNUP API ERROR............", error)
                toast.error("Signup Failed")
                navigate("/signup")
            }
            dispatch(setLoading(false))
            toast.dismiss(toastId)
        }

}




export function sendOtp({ email, navigate }) {
  return async (dispatch) => {
    const toastId = toast.loading("loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", SEND_OTP_API, {
        email,
        checkUserPresent: true,
      });

      console.log("SENDOTP API RESPONSE", response);
      console.log(response.data.success);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("OTP SuccessFully Send");
      navigate("/verify-email");
    } catch (error) {
      console.log("SEND_OTP API ERROR............", error);
      toast.error("Could Not Send OTP");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

//it's is work
export function login(email, password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      });

      console.log("LOGIN API Response...", response);
      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Login SuccessFull");
      dispatch(setToken(response.data.token));
      const userImage = response.data?.user?.image
        ? response.data.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName}${response.data.user.lastName}`;
      dispatch(setUser({ ...response.data.user, image: userImage }));
      localStorage.setItem("token", JSON.stringify(response.data.token));
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/dashboard/my-profile");
    } catch (error) {
      console.log("LOGIN API ERROR...", error);
      toast.error("Login Failed");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function resetPassword(password, confirmPassword, token) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", RESETPASSWORD_API, {
        password,
        confirmPassword,
        token,
      });
      console.log("response here ..", response);
      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("reset password SuccessFully");
    } catch (error) {
      toast.error("unable to reset password");
      console.log("RESET PASSWORD TOKEN Error", error);
    }
    dispatch(setLoading(false));
  };
}

function getPasswordResetToken(email, setEmailSent) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", RESET_PASS_TOKEN_API, {
        email,
      });
      console.log("reset-password-token res...", response);
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("Reset Email Send");
      setEmailSent(true);
    } catch (error) {
      console.log("reset password token error.");
    }
    dispatch(setLoading(false));
  };
}
export default getPasswordResetToken;

// function for logout
export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null));
    dispatch(setUser(null));
    dispatch(resetCart());
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged Out");
    navigate("/");
  };
}
