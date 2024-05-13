import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdAlternateEmail, MdOutlineInsertPhoto } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import toast from "react-hot-toast";

import regImg from "../../../assets/Images/reg.png";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;

    const regEx = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!regEx.test(password)) {
      return setError(
        "password should be at least 6 character, a capital letter,a special character and numerical"
      );
    }

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("User create successfully");
        navigate("/");
        setError("");

        // update profile
        updateProfile(res.user, {
          displayName: name,
          photoURL: image,
        })
          .then(() => {
            toast.success("Profile updated");
          })
          .catch((err) => {
            toast.error(err.message);
          });
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div className="dark:bg-[#121212] py-20">
      <div className="w-full max-w-sm mx-auto overflow-hidden   dark:bg-[#212121] dark:text-[#FFF] bg-[#f5f5f5] rounded-sm shadow-sm ">
        <div className="px-6 py-4">
          <div className="flex justify-center mx-auto">
            <img className="w-auto h-28" src={regImg} alt="" />
          </div>

          <h3 className="mt-3 text-xl font-medium text-center dark:text-[#FFF] text-gray-600 ">
            Create Account
          </h3>

          <p className="mt-1 text-center text-gray-500 dark:text-[#999]">
            Register
          </p>

          <form onSubmit={handleRegister}>
            <div className="w-full mt-4 relative">
              <IoDocumentTextOutline className="absolute top-[14px] dark:text-gray-500 left-2 text-gray-400" />
              <input
                className="block w-full px-8 py-2 mt-2 text-gray-700 placeholder-[#94999f] bg-white outline-none dark:bg-[#464646] dark:text-[#dfdfdf] "
                type="text"
                name="name"
                placeholder="Your Name"
                aria-label="Your Name"
              />
            </div>
            <div className="w-full mt-4 relative">
              <MdOutlineInsertPhoto className="absolute top-[14px] dark:text-gray-500 left-2 text-gray-400" />
              <input
                className="block w-full px-8 py-2 mt-2 text-gray-700 placeholder-[#94999f] bg-white outline-none dark:bg-[#464646] dark:text-[#dfdfdf] "
                type="text"
                name="image"
                placeholder="Photo URL"
                aria-label="Your Name"
              />
            </div>
            <div className="w-full mt-4 relative">
              <MdAlternateEmail className="absolute top-[14px] dark:text-gray-500 left-2 text-gray-400" />
              <input
                name="email"
                className="block w-full px-8 py-2 mt-2 text-gray-700 placeholder-[#94999f] bg-white outline-none dark:bg-[#464646] dark:text-[#dfdfdf] "
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
              />
            </div>

            <div className="w-full mt-4 relative">
              <RiLockPasswordLine className="absolute top-[14px] left-2 dark:text-gray-500 text-gray-400" />
              <input
                name="password"
                className="block w-full px-8 py-2 mt-2 text-gray-700 placeholder-[#94999f] bg-white outline-none dark:bg-[#464646] dark:text-[#dfdfdf] "
                type="password"
                placeholder="Password"
                aria-label="Password"
              />
            </div>

            <p className="text-sm text-red-500">{error}</p>

            <div className="flex items-center justify-between mt-4">
              <div className="text-sm flex items-center gap-1 text-gray-600 dark:text-[#999]  hover:text-gray-500">
                <input type="checkbox" name="" id="" />
                <span> Remember Me</span>
              </div>

              <button className="px-3  tracking-wider text-sm md:text-[16px] border border-[#FF9F66] hover:border-[#FF9F66] bg-[#FF9F66] hover:bg-white  hover:text-[#94999f] ease-in-out duration-300 text-white  py-1 rounded-md font-bold flex gap-2 items-center">
                Sign Up
              </button>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-center py-4 text-center ">
          <span className="text-sm text-gray-500 dark:text-[#999]">
            Already have an?{" "}
          </span>

          <Link
            to="/login"
            className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
