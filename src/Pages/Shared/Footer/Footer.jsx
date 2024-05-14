import { useContext } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FcSportsMode } from "react-icons/fc";
import { IoCallOutline } from "react-icons/io5";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaFacebook, FaStaylinked, FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  const { user } = useContext(AuthContext);
  return (
    <footer className="bg-[#fdfdfd] dark:bg-[#212121]">
      <div className="container px-6 pb-10 pt-20 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <a className="btn btn-ghost text-3xl  md:text-4xl flex dark:text-white items-start justify-start gap-0 pl-0 font-bold">
                <span>
                  {" "}
                  Sports<span className="text-[#FF9F66]">EYE</span>{" "}
                </span>
                <FcSportsMode className="text-5xl" />
              </a>

              <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">
                See always latest updates blogs about sports & never miss out on
                new tips, and more.
              </p>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 ">
              <div>
                <h3 className="text-[#4f4f4f] text-xl font-bold uppercase dark:text-white">
                  Supports
                </h3>
                <div className="mt-3 space-y-2 text-sm text-[#999]">
                  <a className="link link-hover flex items-center gap-2">
                    Customers Supports
                  </a>
                  <a className="link link-hover flex items-center gap-2">
                    Privacy Supports
                  </a>
                  <a className="link link-hover flex items-center gap-2">
                    Contact Supports
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-[#4f4f4f] text-xl font-bold uppercase dark:text-white">
                  Contact
                </h3>
                <div className="mt-3 space-y-2 text-sm text-[#999]">
                  <a className="link link-hover flex items-center gap-2">
                    <IoCallOutline />
                    <span>+8897-32438-53</span>
                  </a>
                  <a className="link link-hover flex items-center gap-2">
                    <AiOutlineMail />
                    <span>
                      {user?.email ? user?.email : "karif9514@gmail.com"}
                    </span>
                  </a>
                </div>
                <div className="flex items-center gap-4 mt-3">
                  <FaFacebook className="text-[16px] text-[#1877F2]" />
                  <BsInstagram className="text-[16px] text-[#5B51D8]" />
                  <FaXTwitter className="text-[16px] text-[#1DA1F2]" />

                  <FaStaylinked className="text-[16px] text-[#5B51D8]" />
                </div>
              </div>
              <div className="">
                <h3 className="text-[#4f4f4f] text-xl font-bold uppercase dark:text-white">
                  any query!
                </h3>
                <div className="relative flex flex-row md:flex-col lg:flex-row items-center md:items-start mt-4 mb-1">
                  <input
                    type="text"
                    name=""
                    placeholder="message..."
                    className="input  input-bordered bg-white border focus:outline-none text-black hover:bg-none rounded-none"
                    id=""
                  />
                  {/* <button className="bg-[#C40C0C] text-white px-3 py-[12px] absolute top-0 right-10 ">Send</button> */}
                  <button className="bg-[#FF9F66] px-5 py-3 mt-0 md:mt-2 lg:mt-0 text-[16px] font-semibold  text-white">
                    Send
                  </button>
                </div>
                <span className="text-sm text-[#999] ">
                  for any query! feel free to message us.
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-10 bg-gray-200 border-none dark:bg-gray-700" />

        <div>
          <p className="text-center text-xs md:text-sm text-gray-500 dark:text-gray-400">
            ©Copyright 2024 || All Right Reserved by SportsEYE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
