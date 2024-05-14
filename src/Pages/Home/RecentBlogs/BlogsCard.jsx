/* eslint-disable react/prop-types */
// import { useContext } from "react";
// import { BiCategory } from "react-icons/bi";
// import { CgDetailsMore } from "react-icons/cg";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../../provider/AuthProvider";
import "./BlogCard.css";
import { BsBoxArrowUp } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
const BlogsCard = ({ blog, handleWishlist }) => {
  // const { user } = useContext(AuthContext);
  const { title, image, short_description, category, _id,blogOwnerName } = blog;
  return (
    <div data-aos="zoom-in-up" data-aos-duration="1000" className="bg-white dark:bg-[#212121] md:py-8  space-y-5 rounded-sm shadow-xl">
      {/* image */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <div className="md:w-1/2 h-[230px] relative">
          <img className="w-full h-full" src={image} alt="" />
          <span className="absolute top-0 left-0 bg-[#FF9F66] text-[#fff] px-2 py-1">
            {category}
          </span>
        </div>
        <div className="md:w-1/2 pr-4 px-3 md:px-0">
          <div className=" gap-y-2">
            <p className="text-xs  lg:text-sm font-light ">
              by{" "}
              <span className="italic font-normal text-primary">
                {blogOwnerName ? blogOwnerName : "Author"}
              </span>
            </p>
          </div>
          <h2 className="text-lg lg:text-xl mt-6 mb-6 md:mb-12 font-bold">
            {title}
          </h2>
          <hr className="w-10 h-[5px] mb-[14px] blog-border bg-[#FF9F66]" />
          <div className="flex justify-between items-center gap-3 md:mt-8 lg:gap-10  ">
            <Link
              to={`/all-blog/${_id}`}
              className="flex items-center gap-1 hover:text-[#FF9F66] duration-200"
            >
              <span>Details</span>
              <GoArrowRight className="text-xl mt-1" />
            </Link>
            <button
              onClick={() => handleWishlist(blog)}
              className="flex items-center gap-1 pr-2 hover:text-[#FF9F66] duration-200"
            >
              <span>Wishlist</span>
              <BsBoxArrowUp className="text-lg " />
            </button>
          </div>
        </div>
      </div>

      {/* description */}
      <div className="md:pl-8 md:pr-4 px-3 md:px-0 pb-4 md:pb-0 text-[#94999f] ">
        {short_description}
      </div>
    </div>
  );
};

export default BlogsCard;
