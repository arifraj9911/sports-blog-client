import banner from "../../../assets/Images/banner3.png";

const Banner = () => {
  return (
    <div className=" dark:bg-[#121212]  bg-[#FFFBF5]">
      <div className="max-w-screen-xl mx-auto">
        <div className="container py-12 md:py-16 mx-auto ">
          <div className="flex flex-col-reverse items-center md:flex-row">
            <div data-aos="fade-right" data-aos-duration="1000" className="w-full mt-12 md:mt-0  lg:w-3/5">
              <div className="px-3 lg:px-0 md:max-w-xl">
                <h1 className="text-3xl dark:text-white flex flex-col font-semibold text-gray-800 lg:text-5xl ">
                  <span>Your Ultimate </span>
                  <span className="mt-3">
                    Destination for{" "}
                    <span className="text-[#FF9F66]">Sports</span>{" "}
                  </span>
                  {/* <br /> your <span className="text-blue-500 ">sports</span> */}
                </h1>

                <p className="mt-7 text-[#94999f]  dark:text-gray-400">
                  Explore the dynamic world of sports through insightful
                  articles, captivating stories, expert analysis, and exclusive
                  interviews with athletes, coaches, and industry insiders. Your
                  ultimate guide to the game, from start to finish
                </p>

                <button className=" px-5  mt-6  tracking-wider text-sm md:text-[16px] border border-[#FF9F66] hover:border-[#FF9F66] bg-[#FF9F66] hover:bg-white  hover:text-[#94999f] ease-in-out duration-300 text-white  py-3 rounded-md font-bold flex gap-2 items-center">
                  Know More
                </button>
              </div>
            </div>

            <div data-aos="fade-left" data-aos-duration="1000" className="flex items-center justify-center w-full mt-0 lg:w-1/2">
              <img
                className="w-full h-full lg:max-w-3xl"
                src={banner}
                alt="Catalogue-pana.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
