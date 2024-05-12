import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import {
  FaFacebook,
  FaStaylinked,
  FaUserGroup,
  FaXTwitter,
} from "react-icons/fa6";
import { IoCallOutline, IoMoon, IoSunny } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
// import { CgProfile } from "react-icons/cg";
import { IoIosLogIn } from "react-icons/io";
import { SiGnuprivacyguard } from "react-icons/si";

import "./Navbar.css";
import { BsInstagram } from "react-icons/bs";
import { FcSportsMode } from "react-icons/fc";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const [dark, setDark] = useState(localStorage.getItem("darkMode"));

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDark(isDarkMode);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
    localStorage.setItem("darkMode", dark);
  }, [dark]);

  const darkModeHandler = () => {
    setDark((prevMode) => !prevMode);
  };

  const menuItem = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/add-blog">Add Blog</NavLink>
      </li>
      <li>
        <NavLink to="/all-blog">All Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/featured-blog">Featured Blog</NavLink>
      </li>
      <li>
        <NavLink to="/wishlist">Wishlist</NavLink>
      </li>
    </>
  );
  return (
    <>
      {/* top nav */}
      <div className="dark:bg-[#121212]   flex  items-center justify-center">
        <div className="navbar py-0 min-h-12 max-w-screen-xl  dark:bg-[#121212]  dark:text-white px-3 lg:px-0 mx-auto ">
          <div className="flex-1 flex-col items-start md:flex-row gap-1 md:gap-10 text-xs md:text-sm text-[#94999f] italic ">
            <div className="flex gap-2 items-center">
              <AiOutlineMail />
              <span>{user?.email ? user?.email : "karif9514@gmail.com"}</span>
            </div>
            <div className="flex gap-2 items-center">
              <IoCallOutline />
              <span>+8897-32438-53</span>
            </div>
          </div>
          <div className="flex items-center ">
            {/* dark/light theme */}
            <div>
              <button
                className="pr-4 hidden lg:flex border-r-2"
                onClick={() => darkModeHandler()}
              >
                {dark && <IoSunny className="text-[16px]" />}
                {!dark && <IoMoon className="text-[16px] " />}
              </button>
            </div>
            <div className="flex items-center gap-4 pl-4">
              <FaFacebook className="text-[16px] text-[#1877F2]" />
              <BsInstagram className="text-[16px] text-[#5B51D8]" />
              <FaXTwitter className="text-[16px] text-[#1DA1F2]" />

              <FaStaylinked className="text-[16px] text-[#5B51D8]" />
            </div>
          </div>
        </div>
      </div>
      <hr />

      {/* bottom nav */}

      <div className="sticky top-0 z-10 dark:bg-[#212121] dark:text-white bg-[#fdfdfd]">
        <div className="navbar h-20 max-w-screen-xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost pr-0 lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content  active:bg-white dark:border-none mt-3 z-[1] p-2 dark:text-white shadow bg-base-100 rounded-box w-52"
              >
                {menuItem}
              </ul>
            </div>
            <a className="btn btn-ghost text-4xl flex items-center gap-0 pl-0 font-bold">
              <span>
                {" "}
                Sports<span className="text-[#FF9F66]">EYE</span>{" "}
              </span>
              <FcSportsMode className="text-5xl" />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex items-center gap-10 px-4 text-[#94999f]  text-[16px] font-normal">
              {menuItem}
            </ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div>
                <div className="flex  items-center gap-6 text-[#94999f]">
                  {user?.photoURL ? (
                    <div
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={user?.displayName}
                      className="relative"
                    >
                      <img
                        className="object-cover w-10 h-10 rounded-full"
                        src={user?.photoURL}
                        alt=""
                      />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 absolute right-1 ring-1 ring-white bottom-0"></span>
                    </div>
                  ) : (
                    <FaUserGroup className="text-3xl" />
                  )}
                  <button
                    onClick={() => {
                      logOut();
                      navigate("/login");
                    }}
                    className=" text-sm md:text-[16px] border border-[#ffd8ae] hover:bg-[#FF9F66] hover:text-white px-3 py-2 rounded-md font-bold ease-in-out duration-300 flex gap-2 items-center"
                  >
                    <CiLogout />
                    <span> Sign Out</span>
                  </button>{" "}
                </div>
              </div>
            ) : (
              <div className="flex gap-3 md:gap-4 text-[#94999f]">
                <Link
                  className="text-sm md:text-[16px] border border-[#ffd8ae] hover:bg-[#FF9F66] hover:text-white px-3 py-2 ease-in-out duration-300 rounded-md font-bold flex gap-2 items-center"
                  to="/login"
                >
                  <IoIosLogIn />
                  <span>Login</span>
                </Link>
                <Link
                  className="text-sm md:text-[16px] border border-[#ffd8ae] hover:bg-[#FF9F66] hover:text-white px-3 py-2 ease-in-out duration-300 rounded-md font-bold flex gap-2 items-center"
                  to="/register"
                >
                  <SiGnuprivacyguard />
                  <span>Register</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <Tooltip place="left" id="my-tooltip" />
    </>
  );
};

export default Navbar;
