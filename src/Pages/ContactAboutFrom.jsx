import React from "react";
import ContactForm from "../components/core/Auth/ContactForm";
import { TbMessages } from "react-icons/tb";
import { GiWorld } from "react-icons/gi";
import { PiPhoneCallDuotone } from "react-icons/pi";

function ContactAboutFrom() {
  return (
    <div className="flex  mx-auto justify-between gap-x-10 ">
      <div className="text-white bg-richblack-800 w-[500px] h-[380px] rounded-lg  mt-20">
     
        <div className="m-10">
        <div className="flex gap-x-3 text-xl font-bold ">
            <TbMessages size={30} />
            Chat on use
          </div>
        <div className=" text-richblack-400 text-sm font-bold">  <p> Our friendly team is here to help.</p>
          <p> info@studynotion.com</p></div>
       
        </div>
        <div className="m-10">
        <div className="flex gap-x-3 text-xl font-bold">
            <GiWorld size={30} />
            Visit us
          </div>
         <div className="text-richblack-400 text-sm  font-bold">
         <p> Come and say hello at our office HQ.</p>
          <p>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,</p>
          <p>Bangalore-560016</p>
         </div>
        </div>
        <div className="m-10  ">
        <div className="flex gap-x-3 text-xl font-bold">
        <PiPhoneCallDuotone  size={30}/>

            Call us
          </div>
         <div className="text-richblack-400 text-sm font-bold">
         <p> Mon - Fri From 8am to 5pm</p>
          <p> +123 456 7869</p>
         </div>
       
        </div>
      </div>

      <div className="mt-22 border border-richblack-600 rounded-lg p-8 mt-20">
      <div className="text-white font-bold text-3xl w-[500px]  ">
      Got a Idea? We've got the skills. Let's team up
      </div>
      <h2 className="text-richblack-400 font-semibold mt-3">
      Tell us more about yourself and what you're got in mind.
      </h2>

        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default ContactAboutFrom;
