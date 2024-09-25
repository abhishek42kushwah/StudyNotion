import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import NavBar from "./components/common/Navbar";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import OpenRoute from "./components/core/Auth/OpenRoute";
import ForgetPassword from "./Pages/ForgetPassword";
import UpdatePassword from "./Pages/UpdatePassword";
import AboutUs from "./Pages/AboutUs";
import ContactAboutFrom from "./Pages/ContactAboutFrom";
import MyProfile from "./components/core/Dashboard/MyProfile";
import Dashboard from "./Pages/Dashboard";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import Error from "./Pages/Error";
import { ACCOUNT_TYPE } from "./utils/constants";
import Settings from "./components/core/Dashboard/Setting/Index.jsx"
import { useSelector } from "react-redux";
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
import Cart from "./components/core/Dashboard/Cart";
import AddCourse from "./components/core/Dashboard/AddCourse";
function App() {
  const { user } = useSelector((state) => state.profile);
  return (
    <div className="w-screen min-h-screen mx-auto bg-richblack-900 flex flex-col font-inter">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signup"
          element={
            <OpenRoute>
              <SignUp />
            </OpenRoute>
          }
        />
        <Route
          path="/login"
          element={
            <OpenRoute>
              <LogIn />
            </OpenRoute>
          }
        />

        <Route
          path="/forget-password"
          element={
            <OpenRoute>
              <ForgetPassword />
            </OpenRoute>
          }
        />

        <Route
          path="/update-password:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />

        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="/dashboard/my-profile" element={<MyProfile />} />
          <Route path="/dashboard/Settings" element={<Settings />} />
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route path="/dashboard/cart" element={<Cart />} />
              <Route
                path="/dashboard/enrolled-courses"
                element={<EnrolledCourses />}
              />
            </>
          )}

          {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
              <Route path="/dashboard/add-course" element={<AddCourse />} />
            </>
          )}
        </Route>

        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactAboutFrom />} />
        
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
