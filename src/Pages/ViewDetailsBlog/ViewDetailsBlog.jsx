import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const ViewDetailsBlog = () => {
  const blogData = useLoaderData();
  const { user, setLoading } = useContext(AuthContext);

  const {
    title,
    image,
    short_description,
    long_description,
    category,
    _id,
    userEmail,
  } = blogData;

  const handleReview = (e) => {
    setLoading(true);
    // e.preventDefault();
    const comment = e.target.comment.value;
    const userName = user?.displayName;
    const userImage = user?.photoURL;

    const commentInfo = { comment, userName, userImage, blogId: _id };

    // console.log(commentInfo );

    if (user?.email === userEmail) {
      return alert("can not comment on own blog");
    }
    axios
      .post("http://localhost:5000/comments", commentInfo)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        // if(res.data.insertedId){
        //     alert('comment added successfully')
        // }
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
    return <span className="loading loading-ring loading-lg"></span>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  console.log(comments);
  return (
    <div>
      <section className="bg-white py-10 px-6">
        <div className="container   mx-auto">
          <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <img
              className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
              src={image}
              alt=""
            />

            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
              <p className="text-sm text-blue-500 uppercase">{category}</p>

              <a
                href="#"
                className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline "
              >
                {title}
              </a>

              <p className="my-3 text-sm font-semibold text-gray-500  md:text-sm">
                {short_description}
              </p>
              <p className="mb-3 text-sm text-gray-500  md:text-sm">
                {long_description}
              </p>
              {user?.email === userEmail && (
                <div className="flex items-center  mt-6">
                  <button className="btn btn-success text-white">Update</button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-20 ">
          {/* review section */}
          <form onSubmit={handleReview}>
            <h2 className="text-xl font-semibold mt-10">Review the blog</h2>
            <textarea
              name="comment"
              className="w-1/2 border mt-4 rounded-lg outline-none p-4"
              placeholder="review blog..."
              rows="6"
              id=""
            ></textarea>
            <div className=" w-1/2 flex justify-end">
              <button
                type="submit"
                className="btn btn-success  text-white block"
              >
                Submit
              </button>
            </div>
          </form>
          {/*all comment section */}

          <div>
            <h2 className="text-xl mb-10 mt-20">All Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
              {comments?.map((comment) => (
                <div key={comment._id} className="">
                  <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <div className="flex justify-center -mt-16 md:justify-end">
                      <img
                        className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
                        alt="Testimonial avatar"
                        src={comment?.userImage}
                      />
                    </div>

                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
                      {comment?.comment}
                    </p>

                    <div className="flex justify-end mt-4">
                      <a
                        href="#"
                        className="text-lg font-medium text-blue-600 dark:text-blue-300"
                        tabIndex="0"
                        role="link"
                      >
                        {comment?.userName}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewDetailsBlog;
