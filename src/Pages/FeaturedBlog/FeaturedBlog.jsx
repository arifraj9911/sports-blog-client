import { useQuery } from "@tanstack/react-query";
import "./FeaturedBlogs.css";
// import { useState } from "react";
import DataTable from "react-data-table-component";
import { GridLoader } from "react-spinners";

const FeaturedBlog = () => {
  // const [index,setIndex] = useState(0)
  const { data: featuredBlogs, isPending } = useQuery({
    queryKey: ["featuredBlogs"],
    queryFn: async () => {
      const response = await fetch("http://localhost:5000/featured", {
        method: "GET",
        credentials: "include",
      });
      return response.json();
    },
  });

  if (isPending) {
    return (
      <div className="flex justify-center my-20">
        <GridLoader color="#FF9F66" />
      </div>
    );
  }

  const columns = [
    {
      name: "Serial Number",
      selector: (row, index) => index + 1,
    },
    {
      name: "Blog Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Blog Owner",
      selector: (row) => row.blogOwnerName,
    },
    {
      name: "Owner Picture",
      selector: (row) => (
        <div className="w-14 h-14  rounded-full">
          <img src={row.blogOwnerImage} className="w-full h-full" alt="" />
        </div>
      ),
    },
  ];

  return (
    <div className="dark:bg-[#121212] ">
      <div style={{}} className="w-5/6 mx-auto py-12  space-y-6">
        <DataTable
          title="Featured Blogs"
          columns={columns}
          data={featuredBlogs.slice(0, 10)}
          fixedHeader
          fixedHeaderScrollHeight="400px"
        ></DataTable>
      </div>
    </div>
  );
};

export default FeaturedBlog;
