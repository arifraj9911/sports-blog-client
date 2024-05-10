import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const ViewDetailsBlog = () => {
  const blogData = useLoaderData();
  const {user} = useContext(AuthContext);
  // console.log(blogData);

  const { title, image, short_description, long_description, category,_id } =
    blogData;

    const handleReview = e =>{
        e.preventDefault();
        const comment = e.target.comment.value;
        const userName = user?.displayName;
        const userImage = user?.photoURL;
        
        
        const commentInfo = {comment,userName,userImage, _id}

        console.log(commentInfo );
    }
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

              <div className="flex items-center mt-6">
                <img
                  className="object-cover object-center w-10 h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  alt=""
                />

                <div className="mx-4">
                  <h1 className="text-sm text-gray-700 ">Amelia. Anderson</h1>
                  <p className="text-sm text-gray-500 ">Lead Developer</p>
                </div>
              </div>
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
              <button type="submit" className="btn btn-success  text-white block">
                Submit
              </button>
            </div>
          </form>
          {/*all comment section */}
          <div className="mt-40">
            <h2 className="text-xl mb-12">All Reviews</h2>
            <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <div className="flex justify-center -mt-16 md:justify-end">
                <img
                  className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
                  alt="Testimonial avatar"
                  src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
                />
              </div>

              <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
                Design Tools
              </h2>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                dolores deserunt ea doloremque natus error, rerum quas odio
                quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                minus consequuntur!
              </p>

              <div className="flex justify-end mt-4">
                <a
                  href="#"
                  className="text-lg font-medium text-blue-600 dark:text-blue-300"
                  tabIndex="0"
                  role="link"
                >
                  John Doe
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewDetailsBlog;
