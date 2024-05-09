import { useQuery } from "@tanstack/react-query";
import BlogsCard from "./BlogsCard";

const RecentBlogs = () => {
  const { data: blogs } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const response = await fetch("http://localhost:5000/blogs");
      return response.json();
    },
  });
  console.log(blogs)
  return (
    <div className="my-20 flex flex-col items-center">
      <h2 className="text-2xl mb-2">Recent Blogs</h2>
      <p>Progressively network equity invested outside the box thinking.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 my-12">
        {
           blogs?.map(blog=><BlogsCard key={blog._id} blog={blog}></BlogsCard>) 
        }
      </div>
    </div>
  );
};

export default RecentBlogs;
