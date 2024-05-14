import { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { FaFacebook, FaStaylinked, FaXTwitter } from "react-icons/fa6";
import { BsInstagram, BsTextParagraph } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { GridLoader } from "react-spinners";
import { Helmet } from "react-helmet-async";

const ViewDetailsBlog = () => {
  const blogData = useLoaderData();
  const navigate = useNavigate();
  const { user, setLoading } = useContext(AuthContext);

  // const {id} = useParams()
  // const [blogData,setBlogData] = useState({})

  const {
    title,
    image,
    short_description,
    long_description,
    category,
    userEmail,
    blogOwnerImage,
    blogOwnerName,
    _id,
  } = blogData;

  // useEffect(()=>{
  //   fetch(`http://localhost:5000/blogs/${id}`,{
  //     method:"GET",
  //     credentials:"include"
  //   })
  //   .then(res=>res.json())
  //   .then(data=>setBlogData(data))
  // },[id])

  const handleReview = (e) => {
    // e.preventDefault();
    setLoading(true);
    const comment = e.target.comment.value;

    const userName = e.target.name.value;
    const userImage = user?.photoURL;

    const commentInfo = { comment, userName, userImage, blogId: _id };

    axios
      .post("http://localhost:5000/comments", commentInfo)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data.insertedId) {
          toast.success("Comment added successfully");
        }
      })
      .catch((err) => console.log(err.message));
  };

  const {
    data: comments,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const response = await fetch(`http://localhost:5000/comments/${_id}`);

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

  if (isError) {
    return <p>{toast.error(error.message)}</p>;
  }

  return (
    <div>
      <Helmet>
        <title>Sports Eye | Blog Details</title>
      </Helmet>
      <div className="dark:bg-[#121212] px-3 lg:px-0 dark:text-[#FFF]">
        <div className="max-w-4xl  mx-auto   py-20">
          <div className="flex flex-col md:flex-row justify-between gap-x-32 gap-y-8">
            <div className="  md:w-1/3">
              <div>
                <div className="flex items-center gap-x-4">
                  <img
                    className="object-cover w-12 h-12 rounded-full"
                    src={blogOwnerImage}
                    alt=""
                  />

                  <div className="">
                    <h1 className="text-xl font-medium text-gray-700 dark:text-[#fff] capitalize ">
                      <span className="font-light text-lg lowercase pr-2 ">
                        by
                      </span>
                      <span className="italic">{blogOwnerName}</span>
                    </h1>

                    <p className="text-base text-gray-500 dark:text-gray-400"></p>
                  </div>
                </div>
              </div>

              <hr className="my-6 hidden md:flex" />
              <div className="flex flex-col mt-8">
                <span className="text-xl">Share this post:</span>
                <div className="flex items-center gap-4 mt-4">
                  <FaFacebook className="text-lg text-[#1877F2]" />
                  <BsInstagram className="text-lg text-[#5B51D8]" />
                  <FaXTwitter className="text-lg text-[#1DA1F2]" />

                  <FaStaylinked className="text-lg text-[#5B51D8]" />
                </div>
              </div>
            </div>
            <hr className="mt-6 flex-col md:hidden" />

            <div className="md:w-5/6">
              <h2 className="text-2xl mb-8">{title}</h2>
              <p className="leading-8 text-[#999]">{short_description}</p>
            </div>
          </div>
          {/* image and description */}
          <div className="mt-10">
            <img
              className="rounded-md mb-6  md:h-[600px] w-full"
              src={image}
              alt=""
            />
            <span className="text-lg font-semibold">{category}</span>
            <hr className="w-10 h-[5px] my-[18px]  blog-border bg-[#FF9F66]" />
            <p className="mt-6 leading-8 text-[#999]">{long_description}</p>
            {user?.email === userEmail && (
              <button
                onClick={() => navigate(`/update-blog/${_id}`)}
                className=" px-5  mt-6  tracking-wider text-sm md:text-[16px] border border-[#FF9F66] hover:border-[#FF9F66] bg-[#FF9F66] hover:bg-white  hover:text-[#94999f] ease-in-out duration-300 text-white  py-3 rounded-md font-bold flex gap-2 items-center"
              >
                Update
              </button>
            )}

            <hr className="my-10" />
          </div>
          {/* comment section */}
          <div className="mt-20">
            {/* comment */}
            <div className="">
              <h2 className="text-3xl uppercase font-semibold">
                Comments({comments?.length})
              </h2>
              <div>
                {comments?.length > 0 ? (
                  comments?.map((comment) => (
                    <div
                      key={comment._id}
                      className="border mt-12 p-4 dark:bg-[#212121] rounded-md"
                    >
                      <div className="flex justify-between">
                        <div className="flex items-center gap-x-4">
                          <img
                            className="object-cover w-10 h-10 rounded-full"
                            src={comment?.userImage}
                            alt=""
                          />

                          <div>
                            <h1 className="text-lg font-semibold text-gray-700 dark:text-[#fff] capitalize ">
                              {comment?.userName}
                            </h1>

                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {comment?.userEmail}
                            </p>
                          </div>
                        </div>
                        <Link to="" className="text-primary ">
                          Reply
                        </Link>
                      </div>
                      <p className="mt-3 text-[#999]">{comment?.comment}</p>
                    </div>
                  ))
                ) : (
                  <p className="flex justify-center items-center min-h-40 text-xl">
                    No Comments available for this post
                  </p>
                )}
              </div>
            </div>

            {/* comment box */}
            {user?.email !== userEmail && (
              <div className="  mt-32 ">
                <h2 className="text-3xl font-semibold uppercase">
                  {" "}
                  Leave a comment
                </h2>
                <form
                  onSubmit={handleReview}
                  className="border rounded-md p-4 md:p-8 mt-10 dark:bg-[#212121]"
                >
                  <div className="flex  flex-col md:flex-row items-center gap-6 justify-between mb-5 mt-3">
                    <div className="relative w-full">
                      <label className="text-[#999] italic font-bold">
                        Your Name
                      </label>
                      <IoDocumentTextOutline className="absolute top-[45px]  left-2 text-gray-300 dark:text-gray-500" />
                      <input
                        type="text"
                        name="name"
                        defaultValue={user?.displayName}
                        className="block w-full px-8 py-2 mt-2 text-[#94999f] bg-white dark:bg-[#464646] dark:text-[#dfdfdf] border  outline-none    "
                      />
                    </div>
                    <div className="relative w-full">
                      <label className="text-[#999] italic font-bold">
                        Your Email
                      </label>
                      <MdAlternateEmail className="absolute top-[45px] left-2 text-gray-300 dark:text-gray-500" />
                      <input
                        type="email"
                        value={user?.email}
                        disabled
                        name="email"
                        className="block w-full px-8 py-2 mt-2 text-[#94999f] bg-gray-100 dark:bg-[#464646] dark:text-[#dfdfdf] border  outline-none    "
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label className="text-[#999] italic font-bold">
                      Your Comment
                    </label>
                    <BsTextParagraph className="absolute top-[45px] left-2 text-gray-300 dark:text-gray-500" />
                    <textarea
                      name="comment"
                      rows="5"
                      type="text"
                      className="block border w-full px-8 py-2 mt-2 text-[#94999f] bg-white dark:bg-[#464646] dark:text-[#dfdfdf]  outline-none  "
                      id=""
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className=" px-10  mt-6  tracking-wider text-sm md:text-[16px] border border-[#FF9F66] hover:border-[#FF9F66] bg-[#FF9F66] hover:bg-white  hover:text-[#94999f] ease-in-out duration-300 text-white  py-3 rounded-md font-bold flex gap-2 items-center"
                  >
                    Send
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsBlog;
