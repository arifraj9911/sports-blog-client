import AllBlogCard from "./AllBlogCard";
import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { CiSearch } from "react-icons/ci";

const AllBlog = () => {
  const { user } = useContext(AuthContext);
  const [search, setSearch] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

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
        console.log(data);
        setBlogs(data);
        setFilteredBlogs(data);
      });
  }, []);

  useEffect(() => {
    const result = blogs.filter((blog) => {
      return blog.title.toLowerCase().match(search.toLowerCase());
    });
    setFilteredBlogs(result);
  }, [search]);

  // if(isRefetching){
  //   return refetch();
  // }

  // if (isPending) {
  //   return <span className="loading loading-ring loading-lg"></span>;
  // }

  // if (isError) {
  //   return <p>{error.message}</p>;
  // }

  console.log(filteredBlogs);

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
              name="search"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="search by blog title ..."
              className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg  pl-11 pr-5 rtl:pr-11 rtl:pl-5 focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 my-12">
        {filteredBlogs?.map((blog) => (
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
