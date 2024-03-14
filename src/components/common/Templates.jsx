import bgImage from "../../assets/Images/loginpagebg.png";
import logInImg1 from "../../assets/Images/login.webp";
import signUpImg2 from "../../assets/Images/signup.webp";
import SignUpForm from "../core/Auth/SignUpForm";
import LogInFrom from "../core/Auth/LogInFrom";

function Templates({ title, des1, des2, formType }) {
  return (
    <div className="flex justify-between  items-center pt-[40px] w-11/12  mx-auto ">
      <div>
        <div className="text-white font-semibold text-[1.8rem] w-[450px]">
          {title}
        </div>
        <div className="text-richblack-100 pt-4 text-[1.1rem]">{des1}</div>
        <div className="text-blue-100  font-edu-sa">{des2}</div>

        {formType === "logIn" ? <LogInFrom /> : <SignUpForm />}
      </div>

      {formType === "logIn" ? (
        <div className="relative -mr-[150px] pt-4 w-6/12 ">
          <img
            src={bgImage}
            alt="Pattern"
            width={470}
            height={440}
            loading="lazy"
          />

          <div className="absolute -top-3 pt-4 -left-3 w-[470px] h-[490px] ">
            <img src={logInImg1} alt="Students" loading="lazy" />
          </div>
        </div>
      ) : (
        <div className="relative w-5/12 -mr-[70px] pt-2 ">
          <div>
            <img src={bgImage} width={450} height={500} loading="lazy" />
          </div>

          <div className="absolute pt-2 w-[450px] -top-4 -left-4">
            <img src={signUpImg2} loading="lazy" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Templates;
