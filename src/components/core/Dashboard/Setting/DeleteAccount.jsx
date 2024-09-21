import React from 'react'
import { FiTrash2 } from "react-icons/fi"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {deleteProfile} from "../../../../services/operations/SettingsAPI";

function DeleteAccount() {
  const dispatch =  useDispatch();
  const navigate = useNavigate()
  const {token } = useSelector((state)=>state.auth)

  async function handleDeleteAccount(){
try {
  dispatch(deleteProfile(token,navigate))
} catch (error) {
  console.log("ERROR MESSAGE-", error.message);
}
  }

  return (
    <div className='my-10 flex flex-row gap-x-5 rounded-md border-[1px] border-pink-700 bg-richblack-900 p-8 px-12 '>
      <div className='' >
        <FiTrash2 className='text-3xl text-pink-200' />
      </div>
      <div className="flex flex-col space-y-2" >
        <h2 className=" text-lg text-richblack-5 font-semibold ">
        Delete Account
        </h2>
        <div className='flex flex-col space-y-2'>
          <p>
            Would you like to delete account
          </p>
          <p>
              This account may contain Paid Courses. Deleting your account is
              permanent and will remove all the contain associated with it.
          </p>
        </div>
        <button 
        type='button'
        onClick={handleDeleteAccount}
        className='w-fit courser-pointer italic text-pink-300'>
          I want to delete my account
        </button>
      </div>

    </div>
  )
}

export default DeleteAccount
