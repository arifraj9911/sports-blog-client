/* eslint-disable react/prop-types */

import { GoArrowRight } from "react-icons/go";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const WishlistCard = ({ blog, handleRemoveWishlist }) => {
  const { title, image, short_description, category, id, _id } = blog;
  return (
    <div className=" ">
      <div className="flex flex-col items-center justify-center w-full  max-w-sm mx-auto">
        <div className="w-full z-0 h-64 bg-gray-300 relative bg-center bg-cover rounded-lg shadow-md">
          <img className="h-[280px] w-full" src={image} alt="" />
          <span className="absolute top-0 left-0 font-light bg-[#FF9F66] text-white px-2 py-1">
            {category}
          </span>
        </div>

        <div className=" z-10 px-3 py-2 -mt-10 overflow-hidden bg-white rounded-sm shadow-lg md:w-[350px] dark:bg-[#212121]">
          <h3 className="py-2 font-bold tracking-wide text-lg text-left text-gray-800  dark:text-white">
            {title}
          </h3>

          <p className="mb-4 text-sm text-[#999] font-light">
            {short_description}
          </p>

          <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-800 dark:text-[#FFF]">
            <Link
              to={`/all-blog/${id}`}
              className="flex items-center gap-1 hover:text-[#FF9F66] duration-200"
            >
              <span>Details</span>
              <GoArrowRight className="text-xl mt-1" />
            </Link>
            <button
              onClick={() => handleRemoveWishlist(_id)}
              className="px-3 py-1 text-sm font-semibold text-white uppercase transition-colors duration-300 transform flex items-center gap-2 bg-[#FF9F66] border-[#FF9F66] hover:bg-[#FFF] hover:border-[#FF9F66] hover:text-red-600 rounded "
            >
              <RiDeleteBin5Fill />
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
