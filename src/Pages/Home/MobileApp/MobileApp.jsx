/* eslint-disable react/no-unknown-property */
import mobileApp from "../../../assets/Images/mobile_app1.jpg";
import { motion } from "framer-motion";

const MobileApp = () => {
  return (
    <div>
      <section className="bg-white dark:bg-[#212121]">
        <div className="container flex flex-col items-center px-4 py-12 md:py-32 mx-auto xl:flex-row">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          <div className="flex justify-center xl:w-1/2 ">
            <img
              className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full"
              src={mobileApp}
              alt=""
            />
          </div>

          <div className="flex flex-col items-start md:items-center mt-10 xl:items-start xl:w-1/2 xl:mt-0">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-800 lg:text-4xl dark:text-white">
              Download our Mobile App
            </h2>

            <p className="block max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
              Experience convenience at your fingertips! Download our mobile app
              to unlock a world of possibilities. Stay connected, informed, and
              engaged with our latest updates, exclusive offers, and seamless
              services anytime, anywhere. With user-friendly features and
              intuitive design, managing tasks, accessing resources, and
              connecting with us has never been easier. Embrace the future of
              accessibility – download our app now and elevate your experience!{" "}
            </p>

            <div className="mt-6 flex gap-6 sm:-mx-2">
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{
                  scale: 1.2,
                  backgroundColor: "#FF9F66",
                  color: "#fff",
                }}
                className="px-5  mt-6  tracking-wider text-sm md:text-[16px] border border-[#FF9F66] hover:border-[#FF9F66] bg-[#FF9F66] hover:bg-white  hover:text-[#94999f] ease-in-out duration-300 text-white  py-3 rounded-md font-bold flex gap-2 items-center"
              >
                App Store
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{
                  scale: 1.2,
                  backgroundColor: "#FF9F66",
                  color: "#fff",
                }}
                className="px-5  mt-6  tracking-wider text-sm text-[#999] md:text-[16px] border border-[#FF9F66] hover:border-[#FF9F66] bg-[#fff] hover:bg-[#FF9F66]  hover:text-[#fff] ease-in-out duration-300   py-3 rounded-md font-bold flex gap-2 items-center"
              >
                Google Store
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileApp;
