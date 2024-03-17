import React, { useState } from "react";
import { LiaEyeSolid } from "react-icons/lia";
import { LiaEyeSlash } from "react-icons/lia";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { login } from "../../../services/operations/authAPI";
import { useDispatch } from "react-redux";
function LogInFrom() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleOnChange = (event) => {
    setFormData((pervData) => ({
      ...pervData,
      [event.target.name]: event.target.value,
    }));
    console.log(formData);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    // toast.success("Logged In Successfully");
    dispatch(login(email, password, navigate));
  };
  return (
    <div>
      <div>
        <form onSubmit={handleOnSubmit}>
          <div>
            <div className="text-white pt-6 text-[1rem]">
              Email Address <sup className="text-red">*</sup>
            </div>
            <input
              type="text"
              // id='email'
              value={formData.email}
              name="email"
              placeholder="Enter email address"
              onChange={handleOnChange}
              className="text-white bg-richblack-700 w-[450px] pl-3 mt-1 h-[45px] outline-none rounded-md border-b  "
            />
            <div className="text-white pt-3 text-[1rem]">
              Password <sup className="text-red">*</sup>
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                name="password"
                placeholder="Enter Password"
                onChange={handleOnChange}
                className="text-white bg-richblack-700  w-[450px] h-[45px] mt-1 outline-none rounded-md border-b pl-3  "
              />

              <span
                className="absolute"
                onClick={() => setShowPassword((perv) => !perv)}
                style={{ right: 20, top: 12 }}
              >
                {showPassword ? (
                  <LiaEyeSlash
                    fontSize={30}
                    className="text-richblack-200 -left-2 "
                  />
                ) : (
                  <LiaEyeSolid
                    fontSize={30}
                    className="text-richblack-200 -left-2 "
                  />
                )}
              </span>
            </div>
          </div>

          <div className="flex justify-end">
            <Link to="/forgetPassword" className="text-blue-100 text-[12px]">
              Forget Password
            </Link>
          </div>
          <div className="pt-5 ">
            <button
              type="submit"
              className="text-cerner text-[1rem] flex mt-3 px-[200px] py-3 rounded-md font-bold 
    bg-yellow-50 text-black  
    hover:scale-95 transition-all duration-200"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogInFrom;
