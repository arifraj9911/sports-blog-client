/* eslint-disable react/prop-types */
import { useContext } from "react";
// import { BiCategory } from "react-icons/bi";
// import { CgDetailsMore } from "react-icons/cg";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { BsBoxArrowUp } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
const AllBlogCard = ({ blog, handleWishlist }) => {
  const { user } = useContext(AuthContext);
  const { title, image, short_description, category, _id } = blog;
  return (
    <div data-aos="zoom-in-up" data-aos-duration="1000">
      <div className="relative w-full h-72 mb-3">
        <img className="h-full w-full" src={image} alt="" />
        <span className="absolute top-0 right-0 bg-[#FF9F66] text-white px-2 font-light py-1">
          {category}
        </span>
      </div>
      <div className="">
        <span className="text-[#999] text-sm font-light">
          By{" "}
          <span className="italic font-semibold">
            {user?.displayName ? user?.displayName : "Author"}
          </span>
        </span>
        <h3 className="text-xl font-semibold mt-3 mb-4 ">{title}</h3>
        <p className="text-[#94999f] font-light ">
          {short_description?.slice(0, 75)}...{" "}
          <Link to={`/all-blog/${_id}`} className="text-primary">
            Read More
          </Link>
        </p>
        <hr className="w-10 h-[5px] my-[14px]  blog-border bg-[#FF9F66]" />
        <div className="flex justify-start items-center gap-8 mt-6 ">
          <Link
            to={`/all-blog/${_id}`}
            className="flex items-center gap-1 hover:text-[#FF9F66] duration-200"
          >
            <span>Details</span>
            <GoArrowRight className="text-xl mt-1" />
          </Link>
          <button
            onClick={() => handleWishlist(blog)}
            className="flex items-center gap-1 hover:text-[#FF9F66] duration-200"
          >
            <span>Wishlist</span>
            <BsBoxArrowUp className="text-lg " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllBlogCard;
