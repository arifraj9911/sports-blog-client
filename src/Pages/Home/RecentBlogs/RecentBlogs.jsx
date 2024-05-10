import { useQuery } from "@tanstack/react-query";
import BlogsCard from "./BlogsCard";
import axios from "axios";

const RecentBlogs = () => {
  const { data: blogs,isPending,isError,error } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const response = await fetch("http://localhost:5000/blogs");
      return response.json();
    },
  });
  if(isPending){
    return <span className="loading loading-ring loading-lg"></span>
  }

  if(isError){
    return <p>{error.message}</p>
  }

  const handleWishlist = (blog)=>{
    console.log('clicked ',blog);
    axios.post('http://localhost:5000/wishlist',blog)
    .then(res=>{
      console.log(res.data);
      if(res.data.insertedId){
        alert('blog added to the wishlist')
      }
    })
    .catch(err=>console.log(err.message))
  }

  // console.log(blogs);
  return (
    <div className="my-20 flex flex-col items-center">
      <h2 className="text-2xl mb-2">Recent Blogs</h2>
      <p>Progressively network equity invested outside the box thinking.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 my-12">
        {blogs?.slice(0, 6)?.map((blog) => (
          <BlogsCard key={blog._id} blog={blog} handleWishlist={handleWishlist}></BlogsCard>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
