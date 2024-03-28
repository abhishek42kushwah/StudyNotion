import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-browser-router";
import getPasswordResetToken from "../services/operations/authAPI";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getPasswordResetToken(email, setEmailSent));
  };
  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
      {loading ? (
        <div className="spinner">Loading...</div>
      ) : (
        <div className="max-w-[500px] p-4 lg:p-8">
          <h1 className="text-[1.85rem] font-semibold loading-[2.337rem] text-richblack-5 ">
            {!emailSent ? "Reset Password " : "Check email"}
          </h1>
          <p className="my-4 text-[1.125rem] leading-[1.625rem] text-richblack-100">
            {!emailSent
              ? "Have no fear. We'll email you instructions to reset your password. If you don't have access to your email we can try account recovery"
              : `We have sent the reset email to ${email}`}
          </p>
          <form onSubmit={handleSubmit}>
            {!emailSent && (
              <label className="w-full">
                <p className="mb-1 text-[0.875rem ] loading-[1.375rem] text-richblack-5 ">
                  Email Address <sup className="text-red">*</sup>
                </p>
                <input
                  required
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="from-style w-full"
                />
              </label>
            )}
            <button
              type="submit"
              className="mt-6 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900"
            >
              {!emailSent ? "Submit" : "Resend Email"}
            </button>
            <div className="mt-6 flex items-center justify-between">
              <Link to="/login">
                <p className="flex items-center gap-x-2 text-richblack-5">
                  <BiArrowBack /> Back To Login
                </p>
              </Link>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default ForgetPassword;
