import React, { useState } from "react";
import toast from "react-hot-toast";
import { LiaEyeSolid } from "react-icons/lia";
import { LiaEyeSlash } from "react-icons/lia";


function SignUpForm() {
  const [accountType, setAccountType] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
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
      toast.error("Passwords Do Not Match");
      return;
    }
    toast.success( "SuccessFully Register ")
  };

  const signUpData = {
    ...fromData,
    accountType,
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="">
        <div className="text-white">
          <button onClick={() => setAccountType("Student")}>Student</button>
          <button onClick={() => setAccountType("Instructor")}>
            Instructor
          </button>
        </div>
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
              value={fromData.firstName}
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
              value={fromData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <div>
            <div className="text-white">
              Email Address<sup className="text-red">*</sup>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              required
              value={fromData.email}
              onChange={handleChange}
              className="text-white bg-richblack-700 w-[480px] pl-3 mt-1 h-[45px] outline-none rounded-md border-b  "
            />
          </div>
        </div>

        <div className="flex gap-x-3">
          <div className="flex  flex-col gap-x-3">
            <div className="text-white gap-x-1">
              Create Password<sup className="text-red">*</sup>
            </div>
            <input
              className="text-white bg-richblack-700 w-[235px] pl-3 mt-1 h-[45px] outline-none rounded-md border-b  "
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Password"
              value={fromData.password}
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
              value={fromData.confirmPassword}
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
  );
}

export default SignUpForm;
