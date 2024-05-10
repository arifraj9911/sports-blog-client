import { useQuery } from "@tanstack/react-query";
import AllBlogCard from "./AllBlogCard";
import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { CiSearch } from "react-icons/ci";

const AllBlog = () => {
  const { user } = useContext(AuthContext);

  const textRef = useRef(null);

  const {
    data: allBlogs,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["allblogs"],
    queryFn: async () => {
      const response = await fetch("http://localhost:5000/blogs");
      return response.json();
    },
  });

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    if (allBlogs) {
      setBlogs(allBlogs);
    }
  }, [allBlogs]);

  if (isPending) {
    return <span className="loading loading-ring loading-lg"></span>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  console.log(blogs);

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


  

  const handleSearch = () => {
    const searchText = textRef.current.value;
    console.log(typeof searchText,searchText);

    axios.get(`http://localhost:5000/blogs?text=${searchText}`)
    .then(res=>{
      console.log(res.data)
    })
    .catch(err=>{
      console.log(err.message)
    })
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="my-20 flex justify-between items-center">
        <h2 className="text-3xl">All Blogs</h2>
        <div>
          <div className="relative flex items-center mt-2">
            <span className="absolute left-4 top-[14px]">
              <CiSearch className="text-xl text-gray-400" />
            </span>

            <input
              ref={textRef}
              type="text"
              placeholder="search by blog title ..."
              className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg rounded-r-none pl-11 pr-5 rtl:pr-11 rtl:pl-5 focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            <button
              onClick={handleSearch}
              className="px-6 py-[11px] font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg rounded-l-none hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 my-12">
        {allBlogs?.map((blog) => (
          <AllBlogCard
            key={blog._id}
            blog={blog}
            handleWishlist={handleWishlist}
          ></AllBlogCard>
        ))}
      </div>
    </div>
  );
};

export default AllBlog;
