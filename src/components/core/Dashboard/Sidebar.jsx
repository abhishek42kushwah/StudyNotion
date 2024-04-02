import React, { useState } from "react";
import { logout } from "../../../services/operations/authAPI";
import { useDispatch, useSelector } from "react-redux";
import { sidebarLinks } from "../../../data/dashboard-links";
import SidebarLink from "./SidebarLink";
import { useNavigate } from "react-router-dom";
import { VscSignOut } from "react-icons/vsc";
import ConfirmationModal from "../../common/ConfirmationModal";

function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [confirmationModal, setConfirmationModal] = useState(null);
  const { user, loading: profileLoading } = useSelector((state) => state.profile);
  const { loading: authLoading } = useSelector((state) => state.auth);

  if (authLoading || profileLoading) {
    return <div className="my-10 spinner">loading...</div>;
  }

  return (
    <div>
      <div
        className="flex flex-col border-r-[1px]
        border-r-richblack-700 bg-richblack-800 py-10 min-w-[222px] h-[calc[100vh-3.5rem]"
      >
        <div className="flex flex-col">
          {sidebarLinks.map((link) => {
            if (link.type && user?.accountType !== link.type) return null;
            return (
              <SidebarLink key={link.id} link={link} iconName={link.icon} />
            );
          })}
        </div>

        <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-600"></div>
        <div className="flex flex-col">
          {/* <SidebarLink
            link={{ name: "Settings", path: "dashboard/settings" }}
            iconName="VscSettingsGear "
          /> */}
          <SidebarLink 
                        link={{name:"Settings", path:"dashboard/settings"}}
                        iconName="VscSettingsGear"
                    />

          <button
            onClick={() =>
              setConfirmationModal({
                text1: "Are your sure ? ",
                text2: " You will be logged out of your Account",
                btn1Text: "logout",
                btn2Text: "Cancel",
                btn1Handler: () => dispatch(logout(navigate)),
                btn2Handler: () => setConfirmationModal(null),
              })
            }
            className="text-sm font-medium  ml-8 text-richblack-300"
          >
            <div className="flex items-center gap-x-2 ">
              <VscSignOut className="text-lg" />
              <span>logout</span>
            </div>
          </button>
        </div>
      </div>

      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </div>
  );
}

export default Sidebar;
