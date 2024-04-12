import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineCurrencyRupee } from 'react-icons/hi';
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
  const { course, editCourse } = useSelector((state) => state.course);
  const [loading, setLoading] = useState(false);
  const [courseCategories, setCourseCategories] = useState([]);

  const getCategories = async () => {
    setLoading(true);
    const categories = await fetchCourseCategories();
    if (categories > 0) {
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

  const onSubmit = async (data) => {};

  return (
    <form
      // onSubmit={handlerSubmit(onSubmit)}

      className="rounded-md border-richblack-700 bg-richblack-800  p-6 space-y-8"
    >
      <div>
        <label htmlFor="courseTitle">
          Course Title<sup className="text-red" >*</sup>
        </label>
        <input
          placeholder="Enter Course Title"
          id="courseTitle"
          {...register("courseTitle", { required: true })}
          className="w-[50%]"
        />
        {errors.courseTitle && <span>Course Title is Required</span>}
      </div>

      <div>
        <label htmlFor="courseShortDesc">
          Course Short Description<sup className="text-red">*</sup>
        </label>
        <textarea
          id="courseShortDesc"
          placeholder="Enter Course Description"
          {...register("courseShortDesc", { required: true })}
          className="w-[50%] min-h-[140px] "
        />
        {errors.courseShortDesc && (
          <span>Course Short Description is Required</span>
        )}
      </div>

      <div className="relative">
        <label htmlFor="coursePrice">
          Course Price<sup className="text-red">*</sup>
        </label>
        <input
          id="coursePrice"
          placeholder="Enter Course Price"
          {...register("coursePrice", { required: true, valueAsNumber: true })}
          className="w-[50%] "
        />
        <HiOutlineCurrencyRupee />
         {errors.coursePrice && <span>Course Price is Required</span>}
      </div>

      <div>
        <label htmlFor="courseCategory">
          Course Categories<sup className="text-red">*</sup>
        </label>
        <select
          id="courseCategory"
          placeholder="Enter Course Category"
          {...register("courseCategory", { required: true })}
          className="w-[50%] "
        >
          <option value="" disabled>
            Choose a Category
          </option>

          {!loading &&
            courseCategories.map((category, index) => (
              <option key={index} value={category._id}>
                {category?.name}
              </option>
            ))}
        </select>
      </div>
    </form>
  );
}

export default CourseInformationFrom;
