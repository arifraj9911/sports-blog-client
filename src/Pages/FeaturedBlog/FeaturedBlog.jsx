import { useQuery } from "@tanstack/react-query";
import "./FeaturedBlogs.css";
// import { useState } from "react";
import DataTable from "react-data-table-component";

const FeaturedBlog = () => {
  // const [index,setIndex] = useState(0)
  const { data: featuredBlogs, isPending } = useQuery({
    queryKey: ["featuredBlogs"],
    queryFn: async () => {
      const response = await fetch("http://localhost:5000/featured");
      // console.log(response)
      return response.json();
    },
  });

  if (isPending) {
    return <p>loading...</p>;
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
      name: "Category",
      selector: (row) => row.category,
    },
    {
      name: "Owner Picture",
      selector: (row) => <img src={row.image} width="50px" alt="" />,
    },
  ];

  const customStyle = {
    cells: {
      style: {
        backgroundColor: "#212121",
      },
    },
  };
  return (
    <div style={{}} className="w-5/6 mx-auto">
      <DataTable
        title="Featured Blogs"
        columns={columns}
        data={featuredBlogs.slice(0, 10)}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="400px"
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        customStyle={customStyle}
      ></DataTable>
    </div>
  );
};

export default FeaturedBlog;
