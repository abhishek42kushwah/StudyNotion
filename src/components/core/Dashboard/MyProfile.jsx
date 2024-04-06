import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconBtn from "../../common/IconBtn";
import { TbEdit } from "react-icons/tb";
function MyProfile() {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  return (
    <div className="text-white w-8/12">
      <h1 className="text-4xl font-bold ml-[30%] ">My Profile</h1>
      {/* section 1  */}
      <div className="flex  gap-x-24 mt-6 ml-[30%] rounded-lg  bg-richblack-700 w-[100%] h-[130px] ">
        <div className="flex items-center justify-center p-20  gap-x-6 -mt-3 -ml-10 ">
          <img
            src={`${user?.image}`}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[78px] rounded-full object-cover"
          />
          <div>
            <p className="">{user?.firstName + " " + user?.lastName}</p>
            <p className="text-richblack-400">{user?.email}</p>
          </div>
        </div>
        <div className="flex flex-row gap-x-2 items-center ">
          <div className=" text-cerner gap-x-2 flex-row items-center text-[13px] px-6 justify-center py-3 rounded-md font-bold bg-yellow-25 text-black flex ">
            <IconBtn
              text="Edit"
              onclick={() => navigate("/dashboard/settings")}
            ></IconBtn>
            <TbEdit size={20} />
          </div>
        </div>
      </div>

      {/* section 2*/}
      <div className="flex flex-col  mt-6 ml-[30%] rounded-lg  bg-richblack-700 w-[100%] h-[130px]  ">
        <div className="flex justify-between  items-center  w-11/12 ">
          <p className="font-bold ml-5 p-6">About</p>
          <div className="text-cerner gap-x-2  items-center text-[13px] px-6 justify-center py-3 rounded-md font-bold bg-yellow-25 text-black flex mr-6">
            <IconBtn
              text="Edit"
              onclick={() => navigate("dashboard/settings")}
            ></IconBtn>
            <TbEdit size={20} />
          </div>
        </div>
        <p className="text-richblack-400 ml-10">
          {" "}
          {user?.additionalDetails?.about ??
            "Write Something about  YourSelf"}{" "}
        </p>
      </div>

      {/* section 3 */}
      <div className="flex  gap-x-8 mt-6 ml-[30%] rounded-lg p-6 bg-richblack-700 w-[100%] h-[250px] ">
        <div className="w-11/12">
          <div className="flex justify-between   ">
            <div className="font-bold ml-5  ">Personal Details</div>
            <div className="text-cerner gap-x-2 items-center text-[13px] px-6 justify-center py-3  rounded-md font-bold bg-yellow-25 text-black flex">
              <IconBtn
                text="Edit"
                onclick={() => navigate("dashboard/settings")}
              ></IconBtn>
              <TbEdit size={20} />
            </div>
          </div>

          <div className="">
            <div className="flex gap-x-72 ml-5">
              <div className="gap-x-6 flex flex-col">
                <h1>first Name</h1>
                <div className="text-richblack-300 font-bold">
                  {user?.firstName}
                </div>
              </div>
              <div>
                <h1>last Name</h1>
                <div className="text-richblack-400 font-bold">
                  {user?.lastName}
                </div>
              </div>
            </div>

            <div className="flex gap-x-24 ml-5 pt-3 ">
              <div>
                <h1>Email</h1>
                <div className="text-richblack-400 font-bold">
                  {user?.email}
                </div>
              </div>
              <div className="ml-2">
                <h1>Phone Number</h1>
                <div className="text-richblack-400">
                  {user?.additionalDetails?.contactNumber ??
                    "Add Contact Number"}
                </div>
              </div>
            </div>

            <div className="flex gap-x-72 ml-5 pt-3">
              <div>
                <h1>Gender</h1>
                <div className="text-richblack-400 font-bold">
                  {user?.additionalDetails?.gender ?? "Add Gender"}
                </div>
              </div>

              <div className="-ml-4">
                <h1> Date Of Birth</h1>
                <div className="text-richblack-400 font-bold ">
                  {user?.additionalDetails?.dateOfBirth ?? "Add DOB"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
