/* eslint-disable react/prop-types */

import { BiCategory } from "react-icons/bi";
import { CgDetailsMore } from "react-icons/cg";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const WishlistCard = ({ blog, handleRemoveWishlist }) => {
  const { title, image, short_description, category, id, _id } = blog;
  return (
    <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg ">
      <img
        className="object-cover object-center w-full h-56"
        src={image}
        alt="avatar"
      />

      <div className="flex items-center px-6 py-3 bg-gray-900">
        <BiCategory className="text-white" />

        <h1 className="mx-3 text-lg font-semibold text-white">{category}</h1>
      </div>

      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 ">{title}</h1>

        <p className="py-2 text-gray-700 dark:text-gray-400">
          {short_description} ...{" "}
          <Link to="" className="text-primary ">
            Read More
          </Link>
        </p>

        <div className="mt-10 flex gap-3 justify-end">
          <Link
            to={`/all-blog/${id}`}
            className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            <CgDetailsMore />

            <span className="mx-1">Details</span>
          </Link>
          <button
            onClick={() => handleRemoveWishlist(_id)}
            className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#9c2323] rounded-lg hover:bg-[#b63d3d] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            <RiDeleteBin5Fill />

            <span className="mx-1">Remove </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
