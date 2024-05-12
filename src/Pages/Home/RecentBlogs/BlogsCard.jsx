/* eslint-disable react/prop-types */
import { BiCategory } from "react-icons/bi";
import { CgDetailsMore } from "react-icons/cg";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const BlogsCard = ({ blog,handleWishlist }) => {
  const { title, image, short_description, category,_id } = blog;
  return (
    // <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg ">
    //   <img
    //     className="object-cover object-center w-full h-56"
    //     src={image}
    //     alt="avatar"
    //   />

    //   <div className="flex items-center px-6 py-3 bg-gray-900">
    //     <BiCategory className="text-white" />

    //     <h1 className="mx-3 text-lg font-semibold text-white">{category}</h1>
    //   </div>

    //   <div className="px-6 py-4">
    //     <h1 className="text-xl font-semibold text-gray-800 ">{title}</h1>

    //     <p className="py-2 text-gray-700 dark:text-gray-400">
    //       {short_description} ...{" "}
    //       <Link to="" className="text-primary ">
    //         Read More
    //       </Link>
    //     </p>

    //     <div className="mt-10 flex gap-3 justify-end">
    //       <Link to={`/all-blog/${_id}`} className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
    //         <CgDetailsMore />

    //         <span className="mx-1">Details</span>
    //       </Link>
    //       <button onClick={()=>handleWishlist(blog)} className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#4F6F52] rounded-lg hover:bg-[#75A47F] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
    //         <svg
    //           className="w-5 h-5 mx-1"
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 20 20"
    //           fill="currentColor"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
    //             clipRule="evenodd"
    //           />
    //         </svg>

    //         <span className="mx-1">Wishlist</span>
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-white py-8 space-y-5 rounded-sm shadow-xl">
      {/* image */}
      <div className="flex gap-8">
        <div className="w-2/5 h-[200px]">
          <img className="w-full h-full" src="https://i.ibb.co/3T2tFGG/basketball.jpg" alt="" />
        </div>
        <div className="w-1/2">
         <div className="flex justify-between">
         <p className="text-[#94999f] font-semibold">Category</p>
          <p className=" text-sm font-normal text-[#94999f]">Blog Author</p>
         </div>
          <h2 className="text-2xl mt-6 mb-12 font-bold">The Legacy of Muhammad Ali: The Greatest of All Time</h2>
          <hr className="w-8 h-[18px]"/>
          <div className="flex justify-between gap-10" >
            <button className="flex items-center gap-1 hover:text-[#FF9F66] duration-200">
              <span>Details</span>
              <GoArrowRight className="text-xl"/>
            </button>
            <button className="flex items-center gap-1 hover:text-[#FF9F66] duration-200">
              <span>Wishlist</span>
              <GoArrowRight className="text-xl"/>
            </button>
            
          </div>
        </div>
      </div>

      {/* description */}
      <div className="pl-8 text-[#94999f]">
      Intrinsicly e-enable principle-centered communities rather than cross-media products. Synergistically communicate orthogonal schemas and fully tested methods of empowerment. Synergistically restore standards compliant.
      </div>
    </div>
  );
};

export default BlogsCard;
