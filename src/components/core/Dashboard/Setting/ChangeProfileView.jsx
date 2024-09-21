
import React,{useRef, useEffect,useState} from 'react';
import IconBtn from "../../../common/IconBtn"
import { FiUpload } from "react-icons/fi"
import { useDispatch,useSelector } from 'react-redux';
import {updateDisplayPicture} from "../../../../services/operations/SettingsAPI"
function ChangeProfileView() {
  const [loading,setLoading]=useState(false)
  const [imageFile,setImageFile] = useState(null)
  const [previewSource,setPreviewSource] = useState(null)
  const dispatch =useDispatch()
  const {token} = useSelector((state)=>state.auth)
  const {user} = useSelector((state)=>state.profile)
  const fileInputRef = useRef(null)

const handleClick=()=>{
  fileInputRef.current.click()
}

  const previewFile=(file)=>{
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = ()=>{
      setPreviewSource(reader.result)
    }
  }

  const handleFileChange = (e)=>{
   const file = e.target.file[0]
   if(file){
    setImageFile(file)
    previewFile(file)
   }

  }

  useEffect(() => {
    if (imageFile) {
      previewFile(imageFile)
    }
  }, [imageFile])



  const handleFileUpload =()=>{
try {
  setLoading(true)
  const formData = new FormData()
  formData.append("DisplayPicture",imageFile)
  dispatch(updateDisplayPicture(token,formData)).then(()=>{
    setLoading(false)
  })
} catch (error) {
  
}
  }

  return (
    <>
    <div className="text-richblack-5 flex items-center justify-between rounded-md bg-richblack-800 border-[1px] border-richblack-700 p-8 px-12  ">
    <div className='flex items-center gap-x-4'>
     <img src={previewSource || user?.image} 
       alt={`profile${user?.firstName}`}
      className='aspect-square w-[78px] rounded-full object-cover'
     />
     <div className="space-y-2">
<p>Change PRofile </p>
<div className='flex flex-col gap-4'>
<input
type='file'
ref={fileInputRef}
onChange={handleFileChange}
className='hidden'
accept='image/png, image/gif, image/jpeg'
 />
 <button
 onClick={handleClick}
disabled={loading}
className='cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50'
 >
  Select
 </button>
 <IconBtn
  text={loading ? "Uploading..." : "Upload"} 
  onClick={handleFileUpload}
  >
  {
    !loading && (   <FiUpload className="text-lg text-richblack-900" />)
  }
 </IconBtn>
</div>
     </div>
    </div>
    </div>
    </>
  )
}

export default ChangeProfileView
