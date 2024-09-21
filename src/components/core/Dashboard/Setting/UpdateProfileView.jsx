import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { changePassword } from "../../../../services/operations/SettingsAPI";
import IconBtn from "../../../common/IconBtn";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
function UpdateProfileView() {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

const   SubmitPasswordForm= async (data)=>{
  try {
    await changePassword(token,data)
  } catch (error) {
    console.log("ERROR MESSAGE-" ,error.message);
  }
  }

  return (
    <>
      <from onSubmit={handleSubmit(SubmitPasswordForm)}>
        <div className="my-10 py-3 flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800 px-12 ">
          <h2 className="text-lg text-richblack-5 font-semibold">Password</h2>
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="relative flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="oldPassword" className="label-style">
                Current Password
              </label>
              <input type={showOldPassword ? " text " : "password"}
              name="OldPassword"
              id="OldPassword"
              placeholder="Enter Current Password" 
                className="text-white bg-richblack-700 w-full pl-3 mt-1 h-[45px] outline-none rounded-md border-b"
                {...register("oldPassword",{required:true} )}
              />
              <span
              onClick={()=>setShowOldPassword((prev)=>!prev)}
              className="absolute right-3 top-[42px] z-[10] cursor-pointer"
              >
              {
                showOldPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> :
                 <AiOutlineEye fontSize={24} fill="#AFB2BF"  />
              }
              </span>
              {errors.oldPassword && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your Current Password
                </span>
              )}
            </div>


            <div className="relative flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="NewPassword" className="label-style">
                New Password
              </label>
              <input type={showNewPassword ? " text " : "password"}
              name="NewPassword"
              id="NewPassword"
              placeholder="Enter New Password" 
                className="text-white bg-richblack-700 w-full pl-3 mt-1 h-[45px] outline-none rounded-md border-b"
                {...register("NewPassword",{required:true} )}
              />
              <span
              onClick={()=>setShowNewPassword((prev)=>!prev)}
              className="absolute right-3 top-[42px] z-[10] cursor-pointer"
              >
              {
                showNewPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> :
                 <AiOutlineEye fontSize={24} fill="#AFB2BF"  />
              }
              </span>
              {errors.newPassword && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your New Password
                </span>
              )}
            </div>

            <div className="flex justify-end gap-2 my-5 " >
           <button onClick={()=>{navigate("/dashboard/my-profile")}}
           className="cursor-pointer rounded-md bg-richblack-700  px-5 font-semibold text-richblack-50">
                   Cancel
           </button>
           <IconBtn type="submit" text="Update" />
            </div>

          </div>
        </div>
      </from>
    </>
  );
}

export default UpdateProfileView;
