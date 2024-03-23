import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import NavBar from "./components/common/Navbar";
import SignUp from "./Pages/SignUp"
import LogIn from "./Pages/LogIn";
import OpenRoute from "./components/core/Auth/OpenRoute";
import ForgetPassword from "./Pages/ForgetPassword";

function App() {
  return (
   <div className="w-screen min-h-screen mx-auto bg-richblack-900 flex flex-col font-inter">
   <NavBar/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/signup" element={<OpenRoute>
      <SignUp/>
    </OpenRoute>} />
    <Route path="/login" element={<OpenRoute>
      <LogIn />
    </OpenRoute>} />

    <Route path="/forget-password"
    element={

        <OpenRoute>
          <ForgetPassword/>
        </OpenRoute>
   
    }/>
    
 
    </Routes>
   </div>
  );
}

export default App;
