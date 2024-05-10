import { useQuery } from "@tanstack/react-query";
import AllBlogCard from "./AllBlogCard";

const AllBlog = () => {
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

  if (isPending) {
    return <span className="loading loading-ring loading-lg"></span>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  console.log(allBlogs);
  return (
    <div className="max-w-screen-xl mx-auto">
      <h2 className="my-10 text-3xl">All Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 my-12">
        {allBlogs?.map((blog) => (
          <AllBlogCard key={blog._id} blog={blog}></AllBlogCard>
        ))}
      </div>
    </div>
  );
};

export default AllBlog;
