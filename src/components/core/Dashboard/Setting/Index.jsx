import React from 'react'
import EditProfileView from "./EditProfileView";
import ChangeProfileView from "./ChangeProfileView"
import UpdateProfileView from "./UpdateProfileView";
import DeleteAccount from "./DeleteAccount";
function SettingView() {
  return (
    <div className='text-white p-6'>

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
