import React, { useState } from "react";
import toast from "react-hot-toast";
import { LiaEyeSolid } from "react-icons/lia";
import { LiaEyeSlash } from "react-icons/lia";
import {ACCOUNT_TYPE} from "../../../utils/constants"
import setSignupData from "../../../Slice/authSlice"
import  {useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";
import {sendOtp} from "../../../services/operations/authAPI"
import Tab from "../../common/Tab"
import UpdatePassword from "../../../Pages/UpdatePassword";

function SignUpForm() {
  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch()
  const  navigate = useNavigate();
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [fromData, setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:"",
  });

  const { firstName, lastName, password, confirmPassword, email } = fromData;

  const handleChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
    console.log(fromData);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // if(password !== confirmPassword){
    //    toast.error('Password Not Match');
    //   }
    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match")
      return
    }


    
// reset
setFormData({
  firstName:"",
  lastName:"",
  email:"",
  password:"",
  confirmPassword:"",
})
setAccountType(ACCOUNT_TYPE.STUDENT)

const signUpData = {
  ...fromData,
  accountType,
};
console.log(accountType)
console.log(signUpData);
console.log(setSignupData);
    // Setting signup data to state
    // To be used after otp verification
dispatch(setSignupData(signUpData))


dispatch(sendOtp(fromData,email,navigate))
   
  };

  const tabData = [
    {
      id: 1,
      tabName: "Student",
      type: ACCOUNT_TYPE.STUDENT,
    },
    {
      id: 2,
      tabName: "Instructor",
      type: ACCOUNT_TYPE.INSTRUCTOR,
    },
  ]

  return (
    <div>
    <Tab tabData={tabData}  field={accountType} setField={setAccountType} />
     <form onSubmit={submitHandler}>
      <div className="">
        <div className="flex gap-x-3 ">
          <div className="text-white pt-6 text-[1rem] flex flex-col ">
            <div>
              First Name <sup className="text-red">*</sup>
            </div>
            <input
              className="text-white bg-richblack-700 w-[235px] pl-3 mt-1 h-[45px] outline-none rounded-md border-b  "
              type="text"
              name="firstName"
              placeholder="Enter first Name"
              required
              value={firstName}
              onChange={handleChange}
            />
          </div>
          <div className="text-white pt-6 text-[1rem] flex flex-col">
            <div className="text-white">
              Last Name <sup className="text-red">*</sup>
            </div>
            <input
              className="text-white bg-richblack-700 w-[235px] pl-3 mt-1 h-[45px] outline-none rounded-md border-b  "
              type="text"
              name="lastName"
              placeholder="Enter last Name"
              value={lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <div>
            <div className="text-white pt-3">
              Email Address<sup className="text-red">*</sup>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              required
              value={email}
              onChange={handleChange}
              className="text-white bg-richblack-700 w-[480px] pl-3 mt-1 h-[45px] outline-none rounded-md border-b  "
            />
          </div>
        </div>

        <div className="flex gap-x-3 relative pt-3  ">
          <div className="flex  flex-col gap-x-3 ">
            <div className="text-white gap-x-1">
              Create Password<sup className="text-red">*</sup>
            </div>
            <input
              className="text-white bg-richblack-700 w-[235px] pl-3 mt-1 h-[45px] outline-none rounded-md border-b  "
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={handleChange}
            />
            <span
              className="absolute pt-9 ml-48"
              onClick={() => setShowPassword((perv) => !perv)}
            >
              {showPassword ? (
                <LiaEyeSlash fontSize={30} className="text-richblack-200  " />
              ) : (
                <LiaEyeSolid fontSize={30} className="text-richblack-200 " />
              )}
            </span>
          </div>
          <div className="text-white">
            <div>
              Confirm Password <sup className="text-red">*</sup>
            </div>
            <input
              className="text-white bg-richblack-700 w-[235px] pl-3 mt-1 h-[45px] outline-none rounded-md border-b  "
              type={showConfirmPassword ? "text " : "Password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleChange}
            />

            <span
              className="absolute -ml-10 pt-3 "
              onClick={() => setShowConfirmPassword((perv) => !perv)}
              // style={{ right: 20, top: 12 }}
            >
                {showConfirmPassword ? <LiaEyeSlash fontSize={30} className="text-richblack-200" /> : <LiaEyeSolid   fontSize={30} className="text-richblack-200" />}
            </span>
          </div>
        </div>

        <button
          className="text-cerner text-[1rem] flex mt-6 px-[180px] py-3 rounded-md font-bold 
    bg-yellow-50 text-black  
    hover:scale-95 transition-all duration-200"
         type="submit"
        >
          Create Account
        </button>
      </div>
    </form>
   
    </div>
   
  );
}

export default SignUpForm;
