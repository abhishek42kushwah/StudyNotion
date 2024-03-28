import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LiaEyeSolid } from "react-icons/lia";
import { LiaEyeSlash } from "react-icons/lia";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { resetPassword } from "../services/operations/authAPI";
function UpdatePassword() {
  const [formData, setFormData] = useState({
    password:"",
    confirmPassword:"",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {loading} = useSelector((state) => state.auth);

  const { password, confirmPassword } = formData;
  const OnChangeHandler = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const token = location.pathname.split('/').at(-1);
    dispatch(resetPassword(password, confirmPassword, token, navigate));
  };

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
      {loading ? (
        <div className="spinner">loading...</div>
      ) : (
        <div className="max-w-[500px] p-4 lg:p-8">
          <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
            Choose New Password
          </h1>
          <p className="my-4 text-[1.125rem] leading-[1.625rem] text-richblack-100">
            Almost done. Enter new Password and your all set.
          </p>
          <form onSubmit={handleOnSubmit}>
            <label className="relative">
              <h1 className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                New Password <sup className="text-red">*</sup>{" "}
              </h1>
              <input
              className="text-white bg-richblack-700 w-[365px] pl-3 mt-1 h-[45px] outline-none rounded-md border-b  "
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={OnChangeHandler}
            />
            <span
              className="absolute pt-3 ml-3"
              onClick={() => setShowPassword((perv) => !perv)}
            >
              {showPassword ? (
                <LiaEyeSlash fontSize={30} className="text-richblack-200  " />
              ) : (
                <LiaEyeSolid fontSize={30} className="text-richblack-200 " />
              )}
            </span>
            </label>

            <label>
              <h1 className="text-white !pt-5">
                Confirm Password <sup className="text-red">*</sup>{" "}
              </h1>
              <div className="flex gap-x-3 ">
              <input
              className="text-white bg-richblack-700 w-full pl-3 mt-1 h-[45px] outline-none rounded-md border-b  "
              type={showConfirmPassword ? "text " : "Password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={OnChangeHandler}
            />

            <span className="pt-3"
              
              onClick={() => setShowConfirmPassword((perv) => !perv)}
              // style={{ right: 20, top: 12 }}
            >
                {showConfirmPassword ? <LiaEyeSlash fontSize={30} className="text-richblack-200" /> : <LiaEyeSolid   fontSize={30} className="text-richblack-200" />}
            </span>
              </div>
            </label>
            <button
              type="submit"
              className="mt-6 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900"
            >
              reset password
            </button>
          </form>
          <div className="mt-6 flex items-center justify-between">
            <Link to="/login">
              <p className="flex items-center gap-x-2 text-richblack-5">
                <BiArrowBack /> Back To Login
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default UpdatePassword;
