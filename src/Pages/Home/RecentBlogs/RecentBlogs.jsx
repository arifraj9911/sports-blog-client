import { useQuery } from "@tanstack/react-query";
import BlogsCard from "./BlogsCard";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const RecentBlogs = () => {
  const { user } = useContext(AuthContext);
  const {
    data: blogs,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const response = await fetch("http://localhost:5000/blogs");
      return response.json();
    },
  });
  if (isPending) {
    return <span className="loading loading-ring loading-lg"></span>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  const handleWishlist = (blog) => {
    const { title, image, short_description, long_description, category, _id } =
      blog;
    const blogData = {
      title,
      image,
      short_description,
      long_description,
      category,
      userEmail: user?.email,
      id: _id,
    };
    console.log("clicked ", blogData);

    axios
      .post("http://localhost:5000/wishlist", blogData)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          alert("blog added to the wishlist");
        }
      })
      .catch((err) => console.log(err.message));
  };

  // console.log(blogs);
  return (
    <div className="py-32 flex flex-col items-center dark:bg-[#121212] dark:text-[#94999f]  bg-[#F9F9F9]">
      <div className="max-w-[1140px] mx-auto">
        <div className="flex dark:text-white justify-between">
          <h2 className="text-2xl font-normal mb-2">Recent Blogs</h2>
          <Link
            to="/all-blog"
            className="flex items-center gap-1 font-normal hover:text-[#FF9F66] duration-200"
          >
            <span>See All</span>
            <GoArrowRight className="text-xl" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-x-14 gap-y-12 my-12">
          {blogs?.slice(0, 6)?.map((blog) => (
            <BlogsCard
              key={blog._id}
              blog={blog}
              handleWishlist={handleWishlist}
            ></BlogsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentBlogs;
