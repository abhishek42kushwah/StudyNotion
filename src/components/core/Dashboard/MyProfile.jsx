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

      {/* section 2*/}
      <div>
        <div>
          <p>About</p>
          <div className="flex gap-x-3">
            <IconBtn
              text="Edit"
              onclick={() => navigate("dashboard/settings")}
            ></IconBtn>
            <TbEdit size={20} />
          </div>
        </div>
        <p>
          {" "}
          {user?.additionalDetails?.about ??
            "Write Something about  YourSelf"}{" "}
        </p>
      </div>

      {/* section 3 */}
      <div>
        <div>
          <div className="flex gap-x-3">
            <div>Personal Details</div>
            <div className="flex">
              <IconBtn
                text="Edit"
                onclick={() => navigate("dashboard/settings")}
              ></IconBtn>
              <TbEdit size={20} />
            </div>
          </div>

          <div>
            <div className="flex gap-x-6">
              <div className="gap-x-6 flex flex-col">
                <h1>first Name</h1>
                <div className="text-richblack-300 font-bold">
                  {user?.firstName}
                </div>
              </div>
              <div>
                <h1>last Name</h1>
                {user?.lastName}
              </div>
            </div>

            <div className="flex gap-x-6">
              <div>
                <h1>Email</h1>
                <div>{user?.email}</div>
              </div>
              <div>
                <h1>Phone Number</h1>
                <div>
                  {user?.additionalDetails?.contactNumber ??
                    "Add Contact Number"}
                </div>
              </div>
            </div>

            <div className="flex gap-x-6">
              <div>
                <h1>Gender</h1>
                <div>{user?.additionalDetails?.gender ?? "Add Gender"}</div>
              </div>

              <div>
                <h1> Date Of Birth</h1>
                <div>{user?.additionalDetails?.dateOfBirth ?? "Add DOB"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
