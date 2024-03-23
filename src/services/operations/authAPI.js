import { toast } from "react-hot-toast";
import {setLoading,setToken} from "../../Slice/authSlice";
import {resetCart} from "../../Slice/cartSlice";
import {setUser} from "../../Slice/profileSlice";
import { apiConnector } from "../apiconnector";
import {endpoints} from "../apis";

const {
    SENDOTP_API,
    SIGNUP_API, 
    LOGIN_API,
    RESETPASSTOKEN_API,
    RESETPASSWORD_API
}  = endpoints;

//it's is work
export function login(email,password,navigate){
return async (dispatch) =>{
    const toastId = toast.loading("Loading")
    dispatch(setLoading(true))
    try {
        const response =  await apiConnector("POST",LOGIN_API,{
            email,password
        }) 

        console.log("LOGIN API Response...",response);
        if(!response.data.success){
            throw new Error(response.data.message)
        }

        toast.success("Login SuccessFull")
        dispatch(setToken(response.data.token))
        const userImage = response.data?.user?.image ? response.data.image : 
        `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`
         dispatch(setUser({...response.data.user,image:userImage}))
         localStorage.setItem("token",JSON.stringify(response.data.token))
         navigate("/dashboard/my-profile")
    } catch (error) {
        console.log("LOGIN API ERROR...",error);
        toast.error("Login Failed")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)

}
}

// export const sendOtp(){
//     try {
        
//     } catch (error) {
        
//     }
// }

function getPasswordResetToken(email,setEmailSent){
    return async(dispatch)=>{
        dispatch(setLoading(true));
        try {
            const response = await apiConnector("POST",RESETPASSTOKEN_API,{email})
            console.log("reset-password-token res...",response);
            if(!response.data.success){
                throw new Error(response.data.message)

            }
             toast.success("Reset Email Send")
             setEmailSent(true)

        } catch (error) {
            console.log("reset password token error.");
        }
        dispatch(setLoading(false))
    }
}

export default getPasswordResetToken;

// function for logout 
export function logout(navigate){
    return(dispatch)=>{
        dispatch(setToken(null))
        dispatch(setUser(null))
        dispatch(resetCart())
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        toast.success("Logged Out");
        navigate("/")
    }
}