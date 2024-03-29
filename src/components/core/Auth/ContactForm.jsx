import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
function ContactForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessFull },
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessFull) {
      reset({
        email: "",
        firstName: "",
        lastName: "",
        message: "",
        phoneNo: "",
      });
    }
  }, [isSubmitSuccessFull, errors]);

  const submitContactFrom = async (data) => {
    console.log("Logging Data", data);
    try {
      setLoading(true);
      const response = { status: "ok" };
      console.log("Logging data", response);
      setLoading(false);
    } catch (error) {
      console.log("Error", error.message);
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <form typeof={handleSubmit(submitContactFrom)}>
      <div className="flex flex-col pt-10">
        <div className="flex gap-x-6">
          <div className="flex flex-col  ">
            <label htmlFor="firstName" className="text-white">
              firstName
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="text-white bg-richblack-700 w-[235px] pl-3 mt-1 h-[45px] outline-none rounded-md border-b  "
              placeholder="Enter First Name"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && <span>Please Enter Name</span>}
          </div>
          <div className="flex  flex-col">
            <label htmlFor="lastName" className="text-white">
              lastName
            </label>
            <input
              type="text"
              name="lastName"
              className="text-white bg-richblack-700 w-[235px] pl-3 mt-1 h-[45px] outline-none rounded-md border-b  "
              id="lastName"
              placeholder="Enter last Name"
              {...register("lastName")}
            />
          </div>
        </div>
        <div className="flex flex-col pt-3">
          <label htmlFor="email" className="text-white">
            Email Address{" "}
          </label>
          <input
            type="email"
            className="text-white bg-richblack-700 w-[500px] pl-3 mt-1 h-[45px] outline-none rounded-md border-b  "
            name="email"
            id="email"
            placeholder="Please Enter Your Email Address"
            {...register("email", { required: true })}
          />
          {errors.email && <span>Please enter your email address</span>}
        </div>

        <div className="text-white flex flex-col pt-3">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            className="text-white bg-richblack-700 w-[500px] pl-3 mt-1 h-[100px] outline-none rounded-md border-b  "
            cols="30"
            row="7"
            placeholder="Please enter your message"
            {...register("message", { required: true })}
          />
          {errors.message && (
            <span>
              {errors.message.type === "required"
                ? "This is a required field"
                : "Invalid Message"}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="text-cerner bg-yellow-50 text-[13px] px-32 py-3 rounded-md font-bold mt-8 "
        >
          Send message
        </button>
      </div>
    </form>
  );
}

export default ContactForm; 
