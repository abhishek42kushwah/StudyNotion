import React from 'react'
import EditProfileView from "./EditProfileView";
import ChangeProfileView from "./ChangeProfileView"
import UpdateProfileView from "./UpdateProfileView";
import DeleteAccount from "./DeleteAccount";
function SettingView() {
  return (
    <div className='text-white w-9/12 ml-[14%] p-6 mx-6 mb-3'>
      <div className='text-3xl font-bold pb-6'>Edit Profile</div>

      <ChangeProfileView />

      <EditProfileView />
      {/* password update  */}
      <UpdateProfileView />
      {/* deleteAccount */}
      <DeleteAccount />
    </div>
  )
}

export default SettingView;
