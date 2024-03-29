import React from 'react'
import ContactForm from './ContactForm'

function GetInTouchForm() {
  return (
    <div className='bg-richblack-900  -mt-10'>
      <div className='flex justify-center items-center flex-col pt-24 ' >
        <h1 className='text-white font-extrabold text-4xl  '>Get in Touch</h1>
        <h3 className='text-richblack-400 pt-3'>We'd love to here for you, Please fill out this form.</h3>
         <div>
          <ContactForm />
         </div>
      </div>
    </div>
  )
}

export default GetInTouchForm
