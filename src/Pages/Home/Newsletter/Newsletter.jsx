import Swal from "sweetalert2";

const Newsletter = () => {
  const handleNewsletter = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Thank you for subscribing",
        showConfirmButton: false,
        timer: 1500,
      });
      e.target.reset();
    }
  };
  return (
    <div className="mb-20 ">
      <section className="flex flex-col max-w-6xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg  md:flex-row md:h-80">
        <div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700 md:dark:bg-gray-800">
          <div className="px-6 py-6 md:px-8 md:py-0">
            <h2 className="text-5xl font-bold leading-[54px] text-gray-700 dark:text-white md:text-gray-100">
              Sign Up For{" "}
              <span className="text-blue-600 mt-1 dark:text-blue-400 md:text-blue-300">
                NewsLetter
              </span>{" "}
              Updates
            </h2>

            <p className="mt-4 text-[16px] text-gray-600 dark:text-gray-400 md:text-gray-400">
              Get the early updates from SportsEYE
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
          <form onSubmit={handleNewsletter}>
            <div className="flex flex-col p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <input
                className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none  focus:placeholder-transparent dark:focus:placeholder-transparent"
                type="email"
                name="email"
                placeholder="Enter your email"
                aria-label="Enter your email"
              />

              <button className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
                subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
