import axios from "axios";
import { useEffect, useState } from "react";
import { BsTextParagraph } from "react-icons/bs";
import { HiOutlineArrowDownRight } from "react-icons/hi2";
import { LuSubtitles } from "react-icons/lu";
import { MdOutlineDescription, MdOutlineInsertPhoto } from "react-icons/md";
import { TbCategory } from "react-icons/tb";

import { useNavigate, useParams } from "react-router-dom";

const UpdateBlog = () => {
  // const {setLoading} = useContext(AuthContext)
  const navigate = useNavigate();
  // const updatesBlog = useLoaderData();

  const { id } = useParams();
  const [updateBlog, setUpdateBlog] = useState({});

  const { image, title, category, short_description, long_description, _id } =
    updateBlog;

  useEffect(() => {
    fetch(`http://localhost:5000/update/${id}`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setUpdateBlog(data[0]));
  }, [id]);

  console.log(updateBlog, id);

  //   console.log(updatesBlog[0]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const image = form.image.value;
    const title = form.title.value;
    const category = form.category.value;
    const short_description = form.short_description.value;
    const long_description = form.long_description.value;
    const updatedBlog = {
      title,
      image,
      category,
      short_description,
      long_description,
    };

    console.log(updatedBlog);

    axios
      .put(`http://localhost:5000/update/${_id}`, updatedBlog, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          alert("updated Successfully");
          navigate(`/all-blog/${_id}`);
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="py-20 dark:bg-[#121212] dark:text-[#FFF]">
      <div className="flex max-w-2xl mx-auto gap-1">
        <h2 className="text-2xl  text-left mb-12   capitalize ">
          Update Your Blog
        </h2>
        <HiOutlineArrowDownRight className="text-xl mt-2" />
      </div>
      <section className="max-w-2xl p-6 mx-auto bg-[#f5f5f5] dark:bg-[#212121]  rounded-sm shadow-sm ">
        <form onSubmit={handleUpdate}>
          <div className="flex flex-col gap-10 ">
            <div className="mt-4">
              <label className="text-[#999]  italic font-bold ">
                Photo URL
              </label>
              <div className="relative">
                <MdOutlineInsertPhoto className="absolute top-[12px] left-2 text-gray-300 dark:text-gray-500" />
                <input
                  defaultValue={image}
                  type="text"
                  name="image"
                  className="block w-full px-8 py-2 mt-2 text-[#94999f] bg-white dark:bg-[#464646] dark:text-[#dfdfdf]  outline-none    "
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1/2 space-y-6">
                <div className="w-full">
                  <label className="text-[#999] italic font-bold">
                    Sports Title
                  </label>
                  <div className="relative">
                    <LuSubtitles className="absolute top-[12px] left-2 text-gray-300 dark:text-gray-500" />
                    <input
                      defaultValue={title}
                      type="text"
                      name="title"
                      className="block w-full px-8 py-2 mt-2 text-[#94999f] bg-white dark:bg-[#464646] dark:text-[#dfdfdf]  outline-none   "
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label className="text-[#999] italic font-bold">
                    Category
                  </label>
                  <div className="relative">
                    <TbCategory className="absolute top-[12px] left-2 text-gray-300 dark:text-gray-500" />
                    <select
                      defaultValue={category}
                      name="category"
                      className="block w-full px-8 py-2 mt-2 text-[#94999f] bg-white dark:bg-[#464646] dark:text-[#dfdfdf]  outline-none   "
                      id=""
                    >
                      <option value="Soccer">Soccer</option>
                      <option value="Tennis">Tennis</option>
                      <option value="Boxing">Boxing</option>
                      <option value="Basketball">Basketball</option>
                      <option value="Rugby">Rugby</option>
                      <option value="Horse Racing">Horse Racing</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="w-1/2">
                <label className="text-[#999] italic font-bold">
                  Short Description
                </label>
                <div className="relative">
                  <MdOutlineDescription className="absolute top-[12px] left-2 text-gray-300 dark:text-gray-500" />
                  <textarea
                    defaultValue={short_description}
                    name="short_description"
                    rows="5"
                    type="text"
                    className="block w-full px-8 py-2 mt-2 text-[#94999f] bg-white dark:bg-[#464646] dark:text-[#dfdfdf]  outline-none  "
                    id=""
                  ></textarea>
                </div>
              </div>
            </div>

            <div>
              <label className="text-[#999] italic font-bold">
                Long Description
              </label>
              <div className="relative">
                <BsTextParagraph className="absolute top-[12px] left-2 text-gray-300 dark:text-gray-500" />
                <textarea
                  defaultValue={long_description}
                  name="long_description"
                  rows="5"
                  type="text"
                  className="block w-full px-8 py-2 mt-2 text-[#94999f] bg-white dark:bg-[#464646] dark:text-[#dfdfdf]  outline-none  "
                  id=""
                ></textarea>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-5  mt-6  tracking-wider text-sm md:text-[16px]  bg-[#FF9F66] hover:bg-white border border-[#FF9F66] hover:border-[#FF9F66] hover:text-[#94999f] ease-in-out duration-300 text-white  py-3 rounded-md font-bold flex gap-2 items-center"
            >
              Update
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdateBlog;
