import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import RequirementFiled from "./RequirementFiled";
import TagsCategorys from "./TagsCategorys";
import IconBtn from "../../../common/IconBtn"
import DropImage from "./DropImage";
import { fetchCourseCategories } from "../../../../services/operations/courseDetailsAPI";
function CourseInformationFrom() {
  const {
    register,
    handlerSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { course, editCourse ,setStep } = useSelector((state) => state.course);
  //setStep 
  const [loading, setLoading] = useState(false);
  const [courseCategories, setCourseCategories] = useState([]);

  const getCategories = async () => {
    setLoading(true);
    const categories = await fetchCourseCategories();
    console.log(categories);
    if (categories.length > 0) {
      setCourseCategories(categories);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (editCourse) {
      setValue("courseTitle", course.courseName);
      setValue("courseTags", course.tag);
      setValue("coursePrice", course.price);
      setValue("courseShortDesc", course.courseDescription);
      setValue("courseBenefits", course.WhatYouWillLearn);
      setValue("courseCategory", course.category);
      setValue("courseRequirements", course.instructions);
      setValue("courseImage", course.thumbnail);
    }
    getCategories();
  }, []);

  const onSubmit = async (data) => {

  };

  return (
    <form
      onSubmit={()=>handlerSubmit(onSubmit)}

      className="rounded-md border-richblack-700 bg-richblack-800   p-6 space-y-8"
    >
      {/* course title */}
      <div className="flex flex-col">
        <label htmlFor="courseTitle">
          Course Title<sup className="text-red">*</sup>
        </label>
        <input
          placeholder="Enter Course Title"
          id="courseTitle"
          {...register("courseTitle", { required: true })}
          
          className="text-white bg-richblack-700 w-[450px] pl-3 mt-1 h-[45px] outline-none rounded-md border-b"
        />
        {errors.courseTitle && <span>Course Title is Required</span>}
      </div>
  
      {/* course  short description */}
      <div className="flex flex-col">
        <label htmlFor="courseShortDesc">
          Course Short Description<sup className="text-red">*</sup>
        </label>
        <textarea
          id="courseShortDesc"
          placeholder="Enter Course Description"
          {...register("courseShortDesc", { required: true })}
          className="text-white bg-richblack-700 w-[500px] pl-3 mt-1 h-[120px] outline-none rounded-md border-b"
        />
        {errors.courseShortDesc && (
          <span>Course Short Description is Required</span>
        )}
      </div>
     
      <div className="relative flex flex-col  ">
        <label htmlFor="coursePrice">
          Course Price<sup className="text-red">*</sup>
        </label>
        <input
          id="coursePrice"
          placeholder="Enter Course Price"
          {...register("coursePrice", { required: true, valueAsNumber: true })}
          className="text-white bg-richblack-700 w-[450px] pl-8 mt-1 h-[45px] outline-none rounded-md border-b"
        />
        <HiOutlineCurrencyRupee  className="absolute bottom-3 left-1 text-richblack-700   " size={24} />
        {errors.coursePrice && <span>Course Price is Required</span>}
      </div>

      <div className="flex flex-col">
        <label htmlFor="courseCategory">
          Course Categories<sup className="text-red">*</sup>
        </label>
        <select
          id="courseCategory"
          // placeholder="Enter Course Category"
          defaultValue=""
          {...register("courseCategory", { required: true })}
          className="text-white bg-richblack-700 w-[450px] pl-3 mt-1 h-[45px] outline-none rounded-md border-b"
        >
          <option className="text-white bg-richblack-700 w-[450px] pl-3 mt-1 h-[45px] outline-none rounded-md border-b"
           value="" disabled>
            Choose a Category
          </option>

          {!loading &&
            courseCategories.map((category, index) => (
              <option key={index} value={category?._id} className="text-black">
                {category?.name}
              </option>
            ))}
        </select>
        {errors.courseCategory && <span>Course Category is Required</span>}
      </div>

      <div >
        <TagsCategorys
          name="courseTags"
          label="courseTags"
          id="courseTags"
          setValue={setValue}
          getValues={getValues}
          register={register}
          errors={errors}
        />
      </div>

      <div>
        <DropImage
          name="courseImage"
          label="courseImage"
          id="courseImage/thumbnail"
          setValue={setValue}
          getValues={getValues}
          register={register}
          errors={errors}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="courseBenefits">
          course Benefits<sup className="text-red">*</sup>
        </label>
        <textarea
          id="courseBenefits"
          placeholder="Enter course Benefits"
          {...register("courseBenefits", { required: true })}
          className="text-white bg-richblack-700 w-[450px] pl-3 mt-1 h-[120px] outline-none rounded-md border-b"
        />
        {errors.courseBenefits && <span> Benefits Course is Required</span>}
      </div>

      <div>
        <RequirementFiled
          name="courseRequirements"
          label="Requirements/instructions"
          setValue={setValue}
          getValues={getValues}
          register={register}
          errors={errors}
        />
      </div>
      <div>
        {
          editCourse && (
            <button 
            onChange={()=>dispatch(setStep(2))}
             className="flex items-canter gap-x-2 bg-richblack-300" >
              Continue Without Saving
            </button>
          )
        }

        <IconBtn 
          text={!editCourse ? "Next" : "Save Changes"}
        />
      </div>
    </form>
  );
}

export default CourseInformationFrom;
