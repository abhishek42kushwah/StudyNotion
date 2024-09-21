import React, { useEffect, useState } from "react";
import NavbarLinks from "../../data/navbar-links";
import { Link, matchPath } from "react-router-dom";
import logoImage from "../../assets/Logo/Logo-Full-Light.png";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RiShoppingCartFill } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
import ProfileDropDown from "../core/Auth/ProfileDropDown";
import { apiConnector } from "../../services/apiconnector";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { categories } from "../../services/apis";
function NavBar() { 
  const [subLinksNav, useSubLinksNav] = useState([]);
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);

  const location = useLocation();
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  const subLinks = [
    {
      title: "python",
      link: "/catalog/python",
    },
    {
      title: "web dev",
      link: "/catalog/web-development ",
    },
    {
      title: "data Entry",
      link: "/catalog/data-Entry ",
    },
  ];

  // const fetchSubLinks = async () => {
  //   try {
  //     const result = await apiConnector("GET", categories.CATEGORIES_API);
  //     console.log("printing sub Link result ", result);
  //     subLinksNav(result.data.data);
  //   } catch (error) {
  //     console.log("cloud not found category data");
  //   }
  // };

  // useEffect(() => {
  //   fetchSubLinks();
  // }, []);

  return (
    <div className="flex h-14 items-center bg-richblack-800 justify-center border-b-[1px] border-b-richblack-700">
      <div className="flex justify-between max-w-maxContent items-center w-11/12">
        {/* setImage */}
        <Link to={"/"}>
          <img src={logoImage} width={160} height={42} loading="lazy" />
        </Link>
        {/* NavBar */}
        <nav>
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <div className="relative cursor-pointer flex items-center gap-1 justify-center group">
                    <p> {link.title}</p>
                 
                    <RiArrowDownSLine />
                    <div
                      className=" absolute left-[50%]  top-[5%]
                      flex flex-col translate-x-[-50%] translate-y-[50%] rounded-md
                       bg-richblack-5 p-4 text-richblack-900 
                      opacity-0 transition-all duration-200 group-hover:opacity-100
                       group-hover:visited lg:w-[400px]"
                    >
                      <div className="absolute rounded rotate-45 
                      left-[75%] top-2 h-6 w-6  bg-richblack-5"></div>                      
                        {subLinks.length ? (
                          subLinks.map((subLinks, index) => (
                            <Link to={`${subLinks.link}`} key={index}>
                              <p className="hover:bg-richblack-400 hover:font-bold ">{subLinks.title}</p>
                            </Link>
                          ))
                        ) : (
                          <div></div>
                        )}
                      </div>
                    
                  </div>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* login/signup/dashboard */}

        <div className="flex gap-4 items-center ">
        {
          user && user?.accountType != "Instructor"  && (
                    <Link to="/dashboard/cart" className='relative'>
                        {/* <RiShoppingCartFill size={24} /> */}
                        <PiShoppingCartSimpleFill  size={24} />

                        {
                            totalItems > 0 && (
                                <span>
                                    {totalItems}
                                </span>
                            )
                        }
                    </Link>
                )
            }
          {token === null && (
            <Link to="/login">
              <button className="bg-richblack-800 px-[14px] rounded-md text-richblack-100 border-[1px] border-richblack-700 py-[8px] ">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="bg-richblack-800 rounded-md px-[12px] border-richblack-700 border-[1px] text-richblack-100 py-[8px]">
                Sign up
              </button>{" "}
            </Link>
          )}
          {token !== null && <ProfileDropDown />}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
