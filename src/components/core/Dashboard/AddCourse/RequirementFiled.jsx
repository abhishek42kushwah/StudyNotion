import React, { useEffect, useState } from "react";

function RequirementFiled({
  setValue,
  getValues,
  label,
  register,
  errors,
  name,
}) {
  const [requirement, setRequirement] = useState("");
  const [requirementList, setRequirementList] = useState([]);

  const handleAddRequirement = () => {
    if (requirement) {
      setRequirementList([...requirementList, requirement]);
      // setRequirement("");
    }
  };

  const handleRemoveRequirement = (index) => {
    const updateRequirementList = [...requirementList];
    updateRequirementList.splice(index, 1);
    setRequirementList(updateRequirementList);
  };

  useEffect(()=>{
    register(name,{
      required:true,
      // validate:(value)=>value.length > 0
    })
  },[])

  useEffect(()=>{
    setValue(name,requirementList)
  },[requirementList])

  return (
    <>
      <div>
        <label htmlFor={name}>
          {label} <sup className="text-red">*</sup>
        </label>
        <input
          type="text"
          id={name}
         
          value={requirement}
          onChange={(e) => setRequirement(e.target.value)}
          
          className="text-white bg-richblack-700 w-[450px] pl-3 mt-1 h-[40px] outline-none rounded-md border-b"
         
        />
        <button
          type="button"
          onClick={handleAddRequirement}
          className="text-yellow-50 font-semibold"
        >
          Add
        </button>
      </div>
      {requirementList.length > 0 && (
        <ul>
          {requirementList.map((requirement, index) => (
            <li key={index}>
              <span>{requirement}</span>
              <button 
              type="button"
              onClick={()=>handleRemoveRequirement(index)}
              className="text-sm text-pure-greys-300 ">clear</button>
            </li>
      ))} 
        </ul>
      )}
      {
        errors[name] && (
          <span>{label} is required</span>
        )
      }
       
       


    </>
  );
}

export default RequirementFiled;
