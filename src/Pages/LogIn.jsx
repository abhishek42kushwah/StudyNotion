import React from 'react'
import Templates from '../components/common/Templates'
// import logInImg1 from "../assets/Images/login.webp"
function LogIn() {
  return (
    <div>
      <Templates 
      title="Welcome Back"
      des1="Build skills for today, tomorrow, and beyond."
      des2 = "Education to future-proof your career."
      // image = {logInImg1} 
        formType="logIn"
      />
    </div>
  )
}

export default LogIn
