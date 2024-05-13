import { BsInstagram, BsTextParagraph } from "react-icons/bs";
import { FaFacebook, FaStaylinked, FaXTwitter } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Practise = () => {
  return (
    <div className="dark:bg-[#121212] dark:text-[#FFF]">
      <div className="max-w-4xl  mx-auto   py-20">
        <div className="flex justify-between gap-48">
          <div>
            <div>
              <div className="flex items-center gap-x-4">
                <img
                  className="object-cover w-16 h-16 rounded-full"
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100"
                  alt=""
                />

                <div className="">
                  <h1 className="text-xl font-semibold text-gray-700 dark:text-[#fff] capitalize ">
                    Mia John
                  </h1>

                  <p className="text-base text-gray-500 dark:text-gray-400">
                    miajohn@merakiui.com
                  </p>
                </div>
              </div>
            </div>

            <hr className="my-6" />
            <div className="flex flex-col">
              <span className="text-xl">Share this post:</span>
              <div className="flex items-center gap-4 mt-4">
                <FaFacebook className="text-lg text-[#1877F2]" />
                <BsInstagram className="text-lg text-[#5B51D8]" />
                <FaXTwitter className="text-lg text-[#1DA1F2]" />

                <FaStaylinked className="text-lg text-[#5B51D8]" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl mb-8">Title of the blog</h2>
            <p className="leading-8 text-[#999]">
              Professionally syndicate client-based paradigms without focused
              initiatives. Distinctively exploit innovative collaboration and
              idea-sharing whereas professional metrics. Progressively embrace
              seamless models.
            </p>
          </div>
        </div>
        {/* image and description */}
        <div className="mt-10">
          <img
            className="rounded-md mb-6"
            src="https://i.ibb.co/ZWNQz9L/boxing.jpg"
            alt=""
          />
          <span className="text-lg font-semibold">Category</span>
          <hr className="w-10 h-[5px] my-[18px]  blog-border bg-[#FF9F66]" />
          <p className="mt-6 leading-8 text-[#999]">
            Intrinsicly architect one-to-one supply chains and enterprise-wide
            processes. Progressively matrix inexpensive solutions before cross
            functional niches. Enthusiastically fashion process-centric
            meta-services without team building innovation. Competently enable
            clicks-and-mortar e-tailers with leading-edge ROI. Quickly expedite
            low-risk high-yield applications after economically sound
            partnerships. Appropriately simplify customized products via
            corporate e-tailers. Phosfluorescently cultivate functionalized
            applications after premier supply chains. Dramatically cultivate
            holistic results rather than principle-centered e-markets.
            Dramatically simplify virtual e-markets through plug-and-play action
            items. Objectively leverage existing cross functional
            infrastructures after wireless expertise.
          </p>
          <hr className="my-10" />
        </div>
        {/* comment section */}
        <div className="mt-20">
          {/* comment */}
          <div className="">
            <h2 className="text-3xl uppercase font-semibold">Comments</h2>
            <div className="border mt-12 p-4 dark:bg-[#212121] rounded-md">
              <div className="flex justify-between">
                <div className="flex items-center gap-x-4">
                  <img
                    className="object-cover w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100"
                    alt=""
                  />

                  <div>
                    <h1 className="text-lg font-semibold text-gray-700 dark:text-[#fff] capitalize ">
                      Mia John
                    </h1>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      miajohn@merakiui.com
                    </p>
                  </div>
                </div>
                <Link to="" className="text-primary ">
                  Reply
                </Link>
              </div>
              <p className="mt-3 text-[#999]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
          </div>

          {/* comment box */}
          <div className="  mt-32 ">
            <h2 className="text-3xl font-semibold uppercase">
              {" "}
              Leave a comment
            </h2>
            <div className="border rounded-md  p-8 mt-10 dark:bg-[#212121]">
              <div className="flex  items-center gap-6 justify-between mb-5 mt-3">
                <div className="relative w-full">
                  <label className="text-[#999] italic font-bold">
                    Your Name
                  </label>
                  <IoDocumentTextOutline className="absolute top-[45px]  left-2 text-gray-300 dark:text-gray-500" />
                  <input
                    type="text"
                    name="image"
                    className="block w-full px-8 py-2 mt-2 text-[#94999f] bg-white dark:bg-[#464646] dark:text-[#dfdfdf] border  outline-none    "
                  />
                </div>
                <div className="relative w-full">
                  <label className="text-[#999] italic font-bold">
                    Your Email
                  </label>
                  <MdAlternateEmail className="absolute top-[45px] left-2 text-gray-300 dark:text-gray-500" />
                  <input
                    type="text"
                    name="image"
                    className="block w-full px-8 py-2 mt-2 text-[#94999f] bg-white dark:bg-[#464646] dark:text-[#dfdfdf] border  outline-none    "
                  />
                </div>
              </div>
              <div className="relative">
                <label className="text-[#999] italic font-bold">
                  Your Comment
                </label>
                <BsTextParagraph className="absolute top-[45px] left-2 text-gray-300 dark:text-gray-500" />
                <textarea
                  name="long_description"
                  rows="5"
                  type="text"
                  className="block border w-full px-8 py-2 mt-2 text-[#94999f] bg-white dark:bg-[#464646] dark:text-[#dfdfdf]  outline-none  "
                  id=""
                ></textarea>
              </div>
              <button className=" px-10  mt-6  tracking-wider text-sm md:text-[16px] border border-[#FF9F66] hover:border-[#FF9F66] bg-[#FF9F66] hover:bg-white  hover:text-[#94999f] ease-in-out duration-300 text-white  py-3 rounded-md font-bold flex gap-2 items-center">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practise;
