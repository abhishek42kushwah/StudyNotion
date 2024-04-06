import React from "react";
import { useSelector } from "react-redux";
import IconBtn from "../components/common/IconBtn";
function Settings() {
  const { user } = useSelector((state) => state.profile);
  return (
    <div className="mx-auto w-10/12">
      <div>
        <h1 className="text-white text-4xl font-bold ml-28 ">Edit Profile</h1>

        {/* section 1  */}
        <div className="bg-richblack-700  h-[130px] mx-auto p-3 mt-6 pt-6  rounded-lg w-9/12  ">
          <div className="ml-6 flex gap-x-3">
            <img
              src={`${user?.image}`}
              className="aspect-square w-[78px] rounded-full object-cover"
            />
            <div>
              <div className="text-white font-bold text-xl ml-3 ">
                Edit Profile Picture
              </div>
              <div>
                <div className="flex gap-x-3 ml-3 pt-2">
                 <div className="text-cerner gap-x-2 flex-row items-center text-[13px] px-3 justify-center py-3 rounded-lg font-bold bg-richblack-400 text-black flex">
                 <IconBtn
                  text="Select"></IconBtn>
                 </div>
                <div 
                className="text-cerner gap-x-2 flex-row items-center text-[13px] px-3 justify-center py-3 rounded-lg font-bold bg-yellow-25 text-black flex">
                <IconBtn 
                  text="Upload"></IconBtn>
                  
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section 2  */}
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default Settings;
