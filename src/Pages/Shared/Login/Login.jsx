import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import toast from "react-hot-toast";

import loginImg from "../../../assets/Images/login2.png";


const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("User login successfully");

        navigate(location?.state ? location?.state : "/");
        
      })
      .catch((err) => toast.error(err.message));
  };

  const handleGoogleSign = () => {
   
    signInWithGoogle()
      .then((res) => {
        console.log(res.user);
        toast.success("User login successfully");
        navigate(location?.state ? location?.state : "/");


        
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div>
      <div className="w-full max-w-sm mx-auto overflow-hidden my-20 bg-white rounded-lg shadow-md ">
        <div className="px-6 py-2">
          <div className="flex justify-center mx-auto">
            <img className="w-auto h-28" src={loginImg} alt="" />
          </div>

          <h3 className=" text-xl font-medium text-center text-gray-600 ">
            Welcome Back
          </h3>

          <p className="mt-1 text-center text-gray-500 ">Login</p>

          <form onSubmit={handleLogin}>
            <div className="w-full mt-4 relative">
              <MdAlternateEmail className="absolute top-[14px] left-2 text-gray-400" />
              <input
                name="email"
                className="block w-full px-8 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
              />
            </div>

            <div className="w-full mt-4 relative">
              <RiLockPasswordLine className="absolute top-[14px] left-2 text-gray-400" />
              <input
                name="password"
                className="block w-full px-8 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                placeholder="Password"
                aria-label="Password"
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <a
                href="#"
                className="text-sm text-gray-600  hover:text-gray-500"
              >
                Forget Password?
              </a>

              <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Sign In
              </button>
            </div>
          </form>
        </div>

        <p className="mt-4 text-center text-gray-600 ">or sign in with</p>

        <button
          onClick={handleGoogleSign}
          className="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border border-l-0 border-r-0 w-3/4 mx-auto  hover:bg-gray-50 "
        >
          <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
            <path
              d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
              fill="#FFC107"
            />
            <path
              d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
              fill="#FF3D00"
            />
            <path
              d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
              fill="#4CAF50"
            />
            <path
              d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
              fill="#1976D2"
            />
          </svg>

          <span className="mx-2">Sign in with Google</span>
        </button>

        <div className="flex items-center justify-center py-4 text-center ">
          <span className="text-sm text-gray-500 ">
            Do not have an account?{" "}
          </span>

          <Link
            to="/register"
            className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
