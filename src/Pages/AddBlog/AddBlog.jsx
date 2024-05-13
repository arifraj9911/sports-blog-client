import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { MdOutlineDescription, MdOutlineInsertPhoto } from "react-icons/md";
import { LuSubtitles } from "react-icons/lu";
import { TbCategory } from "react-icons/tb";
import { BsTextParagraph } from "react-icons/bs";
import { HiOutlineArrowDownRight } from "react-icons/hi2";

const AddBlog = () => {
  const { user } = useContext(AuthContext);
  const handleAddBlog = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const title = form.title.value;
    const category = form.category.value;
    const short_description = form.short_description.value;
    const long_description = form.long_description.value;
    const blogs = {
      title,
      image,
      category,
      short_description,
      long_description,
      userEmail: user?.email,
      blogOwnerImage:user?.photoURL
    };

    console.log(blogs);

    axios
      .post("http://localhost:5000/blogs", blogs, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          alert("update successful");
        }
      })
      .catch((err) => console.log(err.message));

    // fetch('http://localhost:5000/blogs',{
    //     method:"POST",
    //     headers:{
    //         'content-type':'application/json'
    //     },
    //     body:JSON.stringify(blogs)
    // })
    // .then(res=>{
    //     console.log(res)
    // })
    // .catch(err=>console.log(err.message))
  };
  return (
    <div className="py-20 dark:bg-[#121212] dark:text-[#FFF]">
      <div className="flex max-w-2xl mx-auto gap-1">
        <h2 className="text-2xl  text-left mb-12   capitalize ">
          Add Sports Blog
        </h2>
        <HiOutlineArrowDownRight className="text-xl mt-2" />
      </div>
      <section className="max-w-2xl p-6 mx-auto bg-[#f5f5f5] dark:bg-[#212121]  rounded-sm shadow-sm ">
        <form onSubmit={handleAddBlog}>
          <div className="flex flex-col gap-10 ">
            <div className="mt-4">
              <label className="text-[#999]  italic font-bold ">
                Photo URL
              </label>
              <div className="relative">
                <MdOutlineInsertPhoto className="absolute top-[12px] left-2 text-gray-300 dark:text-gray-500" />
                <input
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
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddBlog;
