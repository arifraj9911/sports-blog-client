/* eslint-disable react/prop-types */
import { useContext } from "react";
// import { BiCategory } from "react-icons/bi";
// import { CgDetailsMore } from "react-icons/cg";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import "./BlogCard.css";
import { BsBoxArrowUp } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
const BlogsCard = ({ blog, handleWishlist }) => {
  const { user } = useContext(AuthContext);
  const { title, image, short_description, category, _id } = blog;
  return (
   
    <div className="bg-white dark:bg-[#212121] py-8 space-y-5 rounded-sm shadow-xl">
      {/* image */}
      <div className="flex gap-4 md:gap-6">
        <div className="w-1/2 h-[230px]">
          <img className="w-full h-full" src={image} alt="" />
        </div>
        <div className="w-1/2 pr-4">
          <div className="flex  justify-between items-center gap-y-2">
            <p className="text-[#94999f] text-sm lg:text-lg font-semibold">{category}</p>
            <p className="text-xs  lg:text-sm font-light text-[#94999f]">
              by <span className="italic font-semibold">{user?.displayName ? user?.displayName : 'Author'}</span>
            </p>
          </div>
          <h2 className="text-lg lg:text-2xl mt-6 mb-12 font-bold">{title}</h2>
          <hr className="w-10 h-[5px] mb-[14px] blog-border bg-[#FF9F66]" />
          <div className="flex justify-between items-center gap-4 lg:gap-10  ">
            <Link
              to={`/all-blog/${_id}`}
              className="flex items-center gap-1 hover:text-[#FF9F66] duration-200"
            >
              <span>Details</span>
              <GoArrowRight className="text-xl mt-1" />
            </Link>
            <button

              onClick={() => handleWishlist(blog)}
              className="flex items-center gap-1  hover:text-[#FF9F66] duration-200"
            >
              <span>Wishlist</span>
              <BsBoxArrowUp  className="text-lg " />
            </button>
          </div>
        </div>
      </div>

      {/* description */}
      <div className="pl-8 pr-4 text-[#94999f] ">{short_description}</div>
    </div>
  );
};

export default BlogsCard;
