import banner from "../../../assets/Images/banner3.png";

const Banner = () => {
  return (
    <div className="  bg-[#FFFBF5]">
      <div className="max-w-screen-xl mx-auto">
        <div className="container  py-16 mx-auto ">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-3/5">
              <div className="lg:max-w-xl">
                <h1 className="text-3xl  flex flex-col font-semibold text-gray-800 lg:text-5xl ">
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

                <button className=" px-5  mt-6  tracking-wider text-sm md:text-[16px] border border-[#ffd8ae] bg-[#FF9F66] hover:bg-white hover:border-[#FF9F66] hover:text-[#94999f] ease-in-out duration-300 text-white  py-3 rounded-md font-bold flex gap-2 items-center">
                  Know More
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
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
