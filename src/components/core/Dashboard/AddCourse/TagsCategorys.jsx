import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { MdClose } from "react-icons/md";
function TagsCategorys({
  name,
  setValue,
  label,
  errors,
  register,
  placeholder,
}) {
  const { editCourse, course } = useSelector((state) => state.course);
  const [chips, setChips] = useState([]);

  const handleDeleteChip = (chipIndex) => {
    const newChips = chips.filter((_, index) => index !== chipIndex);
    setChips(newChips);
  };

  const handleKeyDown =(event)=>{
if(event.key === "Enter" || event.key === ","){
   event.preventDefault();
   const chipValue = event.target.value.trim() ;
   if(chipValue && !chips.includes(chipValue)){
    const newChips = [ ...chips,chipValue]
    setChips(newChips)
    event.target.value = ""
   }
}
  };

  useEffect(()=>{
    if (editCourse){
      setChips(course?.tag)
    }
    register(name,{required:true,validate:(value)=>value.length > 0})

  },[])

  useEffect(()=>{
    setValue(name,chips)
  },[chips])

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm text-richblack-5" htmlFor={label}>
        {label}
        <sup className="text-red">*</sup>
      </label>
      <div className="flex w-full  flex-wrap gap-y-2">
        {chips.map((chip, index) => (
          <div
            key={index}
            className="m-1 flex items-center rounded-full bg-yellow-400 px-2 py-1 text-sm text-richblack-5"
          >
            {chip}
            <button
              type="button"
              className="ml-2 focus:outline-none"
              onClick={() => handleDeleteChip(index)}
            >
              <MdClose className="text-sm" />
            </button>
          </div>
        ))}

        <input
          id={name}
          name={name}
          type="text"
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
           className="text-white bg-richblack-700 w-[450px] pl-3 mt-1 h-[50px] outline-none rounded-md border-b"
        />
      </div>
      {errors[name] && (
        <span className="ml-2 text-xs tracking-wide text-pink-200">
          {label} is required
        </span>
      )}
    </div>
  );
}

export default TagsCategorys;
