import AllBlogCard from "./AllBlogCard";
import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { CiSearch } from "react-icons/ci";
import { HiOutlineArrowDownRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const AllBlog = () => {
  const { user } = useContext(AuthContext);
  const [search, setSearch] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const navigate = useNavigate();

  // const [categoryBlogs, setCategoryBlogs] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("Filtered By Category");

  const textRef = useRef(null);

  // const {
  //   data: allBlogs,
  //   isPending,
  //   isError,
  //   error,
  // } = useQuery({
  //   queryKey: ["allblogs"],
  //   queryFn: async () => {
  //     const response = await fetch("http://localhost:5000/blogs");
  //     return response.json();
  //   },
  // },);

  // useEffect(() => {
  //   if (allBlogs) {
  //     setBlogs(allBlogs);
  //     setFilteredBlogs(allBlogs)
  //   }
  // }, [allBlogs]);

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBlogs(data);
        setFilteredBlogs(data);
        // setCategoryBlogs(data);
      });
  }, []);

  useEffect(() => {
    const result = blogs.filter((blog) => {
      return blog.title.toLowerCase().match(search.toLowerCase());
    });
    setFilteredBlogs(result);
  }, [search]);

  useEffect(() => {
    const result = blogs.filter((blog) => {
      return blog.category.toLowerCase().match(categoryFilter.toLowerCase());
    });
    setFilteredBlogs(result);
  }, [categoryFilter]);

  console.log(filteredBlogs);

  // if(isRefetching){
  //   return refetch();
  // }

  // if (isPending) {
  //   return <span className="loading loading-ring loading-lg"></span>;
  // }

  // if (isError) {
  //   return <p>{error.message}</p>;
  // }

  // console.log(filteredBlogs);

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

    if(!user){
      return navigate('/login');
    }

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

  const handleCategoryBlog = (target) => {
    if (target === 1) {
      setCategoryFilter("Soccer");
      // setFilteredBlogs(categoryBlogs)
    } else if (target === 2) {
      setCategoryFilter("Tennis");
      // setFilteredBlogs(categoryBlogs)
    } else if (target === 3) {
      setCategoryFilter("Rugby");
      // setFilteredBlogs(categoryBlogs)
    } else if (target === 4) {
      setCategoryFilter("Boxing");
      // setFilteredBlogs(categoryBlogs)
    } else if (target === 5) {
      setCategoryFilter("Basketball");
      // setFilteredBlogs(categoryBlogs)
    } else if (target === 6) {
      setCategoryFilter("Horse Racing");
      // setFilteredBlogs(categoryBlogs)
    }
    // setFilteredBlogs(categoryBlogs)
  };

  // const handleSearch = (e) => {
  //   e.preventDefault()
  //   // const searchText = e.target.search.value;
  //   // // const searchText = textRef.current.value;
  //   // console.log(typeof searchText,searchText);

  // //   axios.get('http://localhost:5000/blogs')
  // //   .then(res=>{
  // //     console.log(res.data)
  // //     // setBlogs(res.data)
  // //   })
  // //   .catch(err=>{
  // //     console.log(err.message)
  // //   })
  // // };

  // }

  return (
    <div className="dark:bg-[#121212] px-3 lg:px-0 dark:text-[#FFF]">
      <div className="max-w-screen-xl mx-auto">
      <div className=" py-20">
      <div className=" flex  justify-between items-center">
      
      <div className="flex w-3/5 md:w-40  items-center gap-1">
        <h2 className="text-2xl">All Blogs</h2>
        <HiOutlineArrowDownRight  className="text-xl mt-1" />
      </div>

      <div className="">
        <div className="relative flex items-center mt-2">
          <span className="absolute left-4 top-[14px]">
            <CiSearch className="text-xl text-gray-400" />
          </span>

          <input
            ref={textRef}
            name="search"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search by blog title ..."
            className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg  pl-11 pr-5 rtl:pr-11 rtl:pl-5 focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
      </div>

      <div className="dropdown hidden md:flex dropdown-left">
        <div tabIndex={0} role="button" className="btn m-1 bg-[#FFF] border-[#FF9F66] text-[#999] hover:bg-[#FF9F66] hover:border-[#FF9F66] hover:text-[#FFF]">
          <span className="font-bold">{categoryFilter && categoryFilter}</span>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 dark:text-[#999] shadow bg-base-100 rounded-box w-52"
        >
          <li onClick={() => handleCategoryBlog(1)} className="border-b ">
            <a>Soccer</a>
          </li>
          <li onClick={() => handleCategoryBlog(2)} className="border-b ">
            <a>Tennis</a>
          </li>
          <li onClick={() => handleCategoryBlog(3)} className="border-b ">
            <a>Rugby</a>
          </li>
          <li onClick={() => handleCategoryBlog(4)} className="border-b ">
            <a>Boxing</a>
          </li>
          <li onClick={() => handleCategoryBlog(5)} className="border-b ">
            <a>Basketball</a>
          </li>
          <li onClick={() => handleCategoryBlog(6)}>
            <a>Horse Racing</a>
          </li>
        </ul>
      </div>
      
    </div>
    <div className="dropdown  flex justify-center mt-14 md:hidden dropdown-bottom md:dropdown-left">
        <div tabIndex={0} role="button" className="btn m-1 bg-[#FFF] border-[#FF9F66] text-[#999] hover:bg-[#FF9F66] hover:border-[#FF9F66] hover:text-[#FFF]">
          <span className="font-bold">{categoryFilter && categoryFilter}</span>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 dark:text-[#999] shadow bg-base-100 rounded-box w-52"
        >
          <li onClick={() => handleCategoryBlog(1)} className="border-b ">
            <a>Soccer</a>
          </li>
          <li onClick={() => handleCategoryBlog(2)} className="border-b ">
            <a>Tennis</a>
          </li>
          <li onClick={() => handleCategoryBlog(3)} className="border-b ">
            <a>Rugby</a>
          </li>
          <li onClick={() => handleCategoryBlog(4)} className="border-b ">
            <a>Boxing</a>
          </li>
          <li onClick={() => handleCategoryBlog(5)} className="border-b ">
            <a>Basketball</a>
          </li>
          <li onClick={() => handleCategoryBlog(6)}>
            <a>Horse Racing</a>
          </li>
        </ul>
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 md:gap-y-12 pb-12 mt-6">
        {filteredBlogs?.map((blog) => (
          <AllBlogCard
            key={blog._id}
            blog={blog}
            handleWishlist={handleWishlist}
          ></AllBlogCard>
        ))}
      </div>
    </div>
    </div>
  );
};

export default AllBlog;
