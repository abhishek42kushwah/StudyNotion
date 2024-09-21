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
      <h1 className="text-4xl font-bold ml-[30%]">My Profile</h1>

      {/* Section 1 */}
      <div className="flex gap-x-24 mt-6 ml-[30%] rounded-lg justify-around bg-richblack-700 w-full h-[130px]">
        <div className="flex items-center justify-center p-10 gap-x-6">
          <img
            src={`${user?.image}`}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[60px] rounded-full object-cover"
          />
          <div>
            <p>{user?.firstName + " " + user?.lastName}</p>
            <p className="text-richblack-400">{user?.email}</p>
          </div>
        </div>
        <div className="flex flex-row gap-x-1 items-center justify-center">
          <IconBtn text="Edit" onClick={() => navigate("/dashboard/settings")}>
            <TbEdit size={20} />
          </IconBtn>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex px-10 mt-6 ml-[30%] rounded-lg justify-between bg-richblack-700 w-full h-[130px]">
        <div className="flex items-center justify-center p-10 gap-x-12 ">
          <div>
            <p>About</p>
            <p className="text-richblack-400">{user?.additionalDetails?.about ?? "Write Something about Yourself"}</p>
          </div>
        </div>
        <div className="flex flex-row gap-x-1 items-center justify-center">
          <IconBtn text="Edit" onClick={() => navigate("/dashboard/settings")}>
            <TbEdit size={20} />
          </IconBtn>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex gap-x-8 mt-6 ml-[30%] rounded-lg  bg-richblack-700 w-full h-[250px]">
        <div className="w-11/12 m-6">
          <div className="flex justify-between flex-row ">
            <div className="font-bold pl-14  ">Personal Details</div>
            <div className="flex flex-row -pr-8 gap-x-1 items-center justify-center">
              <IconBtn text="Edit" onClick={() => navigate("/dashboard/settings")} >
              <TbEdit size={20} />
              </IconBtn>
            </div>
          </div>

          <div>
            <div className="flex gap-x-72 pl-14">
              <div className="flex flex-col gap-x-6">
                <h1>First Name</h1>
                <div className="text-richblack-300 font-bold">
                  {user?.firstName}
                </div>
              </div>
              <div>
                <h1>Last Name</h1>
                <div className="text-richblack-400 font-bold">
                  {user?.lastName}
                </div>
              </div>
            </div>

            <div className="flex gap-x-24 pl-14 pt-3">
              <div>
                <h1>Email</h1>
                <div className="text-richblack-400 font-bold">
                  {user?.email}
                </div>
              </div>
              <div className="pl-4">
                <h1>Phone Number</h1>
                <div className="text-richblack-400">
                  {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
                </div>
              </div>
            </div>

            <div className="flex gap-x-72 pl-14 pt-3">
              <div>
                <h1>Gender</h1>
                <div className="text-richblack-400 font-bold">
                  {user?.additionalDetails?.gender ?? "Add Gender"}
                </div>
              </div>

              <div className="-ml-4">
                <h1>Date Of Birth</h1>
                <div className="text-richblack-400 font-bold">
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
