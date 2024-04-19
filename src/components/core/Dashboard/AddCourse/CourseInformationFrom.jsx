import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import RequirementFiled from "./RequirementFiled";
import TagsCategorys from "./TagsCategorys";
import { setStep, setCourse } from "../../../../Slice/courseSlice";
import IconBtn from "../../../common/IconBtn";
import DropImage from "./DropImage";
import toast from "react-hot-toast";
import { COURSE_STATUS } from "../../../../utils/constants";
import {
  fetchCourseCategories,
  editCourseDetails,
  addCourseDetails,
} from "../../../../services/operations/courseDetailsAPI";
function CourseInformationFrom() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { course, editCourse } = useSelector((state) => state.course);
  const { token } = useSelector((state) => state.auth);
  

  const [loading, setLoading] = useState(false);
  const [courseCategories, setCourseCategories] = useState([]);

  const getCategories = async () => {
    setLoading(true);
    const categories = await fetchCourseCategories();
    // console.log(categories);
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

  const isFormUpdated = () => {
    const currentValues = getValues();
    if (
      currentValues.courseTitle !== course.courseName ||
      currentValues.courseShortDesc !== course.courseShortDesc ||
      currentValues.coursePrice !== course.coursePrice ||
      // currentValues.courseTags.toString() !== course.Tags.toString() ||
      currentValues.courseBenefits !== course.WhatWillYouLearn ||
      currentValues.courseCategory._id !== course.category._di ||
      // currentValues.courseImage !== course.thumbnail ||
      currentValues.courseRequirements.toString() !==
        course.instructions.toString()
    )
      return true;
    else return false;
  };

  const onSubmit = async (data) => {
    if (editCourse) {
      if (isFormUpdated()) {
        const currentValues = getValues();
        const formData = new FormData();

        formData.append("courseId", course._id);
        if (currentValues.courseTitle !== course.courseName) {
          formData.append("courseName", data.courseTitle);
        }

        if (currentValues.courseShortDesc !== course.courseDescription) {
          formData.append("courseDescription", data.courseShortDesc);
        }

        if (currentValues.coursePrice !== course.price) {
          formData.append("coursePrice", data.coursePrice);
        }

        if (currentValues.courseBenefits !== course.WhatWillYouLearn) {
          formData.append("WhatWillYouLearn", data.courseBenefits);
        }

        if (currentValues.courseCategory._id !== course.category._id) {
          formData.append("category", data.courseCategory);
        }

        if (
          currentValues.courseRequirements.toString() !==
          course.instruction.toString()
        ) {
          formData.append("instruction", JSON.string(data.courseRequirements));
        }

        setLoading(true);
        const result = await editCourseDetails(formData, token);
        setLoading(false);
        if (result) {
          setStep(2);
          dispatch(setCourse(result));
        }
      } else {
        toast.error("No changes made so far  ");
      }
      return;
    }

    //  create a new course
    const formData = new FormData();
    formData.append("courseName", data.courseTitle);
    formData.append("courseDescription", data.courseShrotDesc);
    formData.append("price", data.coursePrice);
    formData.append("WhatWillYouLearn", data.courseBenefits);
    formData.append("instruction", JSON.stringify(data.courseRequirements));
    formData.append("courseName", data.courseTitle);
    formData.append("status", COURSE_STATUS.DRAFT);

    setLoading(true);
    const result = await addCourseDetails(formData, token);
    if (result) {
      setStep(2);
      dispatch(setCourse(result));
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
        {errors.courseTitle && <span>Course Title is Required**</span>}
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
          <span>Course Short Description is Required**</span>
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
        <HiOutlineCurrencyRupee
          className="absolute bottom-3 left-1 text-richblack-700   "
          size={24}
        />
        {errors.coursePrice && <span>Course Price is Required**</span>}
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
          <option
            className="text-white bg-richblack-700 w-[450px] pl-3 mt-1 h-[45px] outline-none rounded-md border-b"
            value=""
            disabled
          >
            Choose a Category
          </option>

          {!loading &&
            courseCategories.map((category, index) => (
              <option key={index} value={category?._id} className="text-black">
                {category?.name}
              </option>
            ))}
        </select>
        {errors.courseCategory && <span>Course Category is Required**</span>}
      </div>

      <div>
        <TagsCategorys
          name="courseTags"
          label="Tags"
          placeholder="Enter tag and Press Enter"
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
          editData={editCourse ? course?.thumbnail : null }
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
        {errors.courseBenefits && <span> Benefits Course is Required**</span>}
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
        {editCourse && (
          <button
            onChange={() => dispatch(setStep(2))}
            className="flex items-canter gap-x-2 bg-richblack-300"
          >
            Continue Without Saving
          </button>
        )}

        <IconBtn
          className="bg-yellow-25 rounded font-semibold"
          text={!editCourse ? "Next" : "Save Changes"}
        />
      </div>
    </form>
  );
}

export default CourseInformationFrom;
