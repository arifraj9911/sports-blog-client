import axios from "axios";

const AddBlog = () => {
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
    };

    // console.log(blogs);

    axios
      .post("http://localhost:5000/blogs", blogs)
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
    <div className="my-20">
      <section className="max-w-2xl p-6 mx-auto bg-white rounded-md shadow-md ">
        <h2 className="text-2xl text-center mb-8 font-semibold text-gray-700 capitalize ">
          Add Sports Blog
        </h2>

        <form onSubmit={handleAddBlog}>
          <div className="flex flex-col gap-10 ">
            <div className="mt-4">
              <label className="text-gray-700 ">Photo URL</label>
              <input
                type="text"
                name="image"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div className="flex gap-4">
              <div className="w-1/2 space-y-5">
                <div className="w-full">
                  <label className="text-gray-700 ">Sports Title</label>
                  <input
                    type="text"
                    name="title"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>
                <div className="w-full">
                  <label className="text-gray-700 ">Category</label>
                  <select
                    name="category"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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

              <div className="w-1/2">
                <label className="text-gray-700 ">Short Description</label>
                <textarea
                  name="short_description"
                  rows="5"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring "
                  id=""
                ></textarea>
              </div>
            </div>

            <div>
              <label className="text-gray-700 ">Long Description</label>
              <textarea
                name="long_description"
                rows="5"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                id=""
              ></textarea>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
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
