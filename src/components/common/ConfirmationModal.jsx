import React from "react";
import IconBtn from "./IconBtn";

function ConfirmationModal({ modalData }) {
  return (
    <div className="">
      <div className=" flex flex-col w-11/12 relative justify-center items-center mx-auto text-white left-[90%] ml-[100%] -mt-24 bg-transparent  all duration-200  ">
       <div className="w-[330px]  p-3 h-[150px] rounded-md flex-col items-center justify-center flex bg-richblack-800">
       <p className="text-white text-2xl" >{modalData.text1}</p>
        <p className="text-richblack-400 text-sm">{modalData.text2}</p>
        <div className="flex ml-5 mt-3 ">
          <div className=" text-cerner gap-x-2  items-center text-[13px] px-6 justify-center py-3 rounded-md font-bold bg-yellow-25 text-black flex mr-6" >
            <IconBtn
              onclick={modalData?.btn1Handler}
              text={modalData?.btn1Text}
            />
          </div>
          <div>
            <button 
            className=" text-cerner gap-x-2  items-center text-[13px] px-6 justify-center py-3 rounded-md font-bold bg-richblack-200 text-black flex mr-6"
             onClick={modalData?.btn2Handler}>
              {modalData?.btn2Text}
            </button>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
