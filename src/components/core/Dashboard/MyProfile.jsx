import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconBtn from "../../common/IconBtn";
import { TbEdit } from "react-icons/tb";
function MyProfile() {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold">My Profile</h1>
      {/* section 1  */}
      <div className="flex  gap-x-20 mt-6 ">
        <div className="flex  items-center gap-x-8">
          <img
            src={`${user?.image}`}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[78px] rounded-full object-cover"
          />
          <div>
            <p className="">{user?.firstName + " " + user?.lastName}</p>
            <p>{user?.email}</p>
          </div>
        </div>
        <div className="flex gap-x-2 items-center">
          <IconBtn
            text="Edit"
            onclick={() => navigate("/dashboard/settings")}
          ></IconBtn>
          <TbEdit size={20} />
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
