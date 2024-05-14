import Swal from "sweetalert2";
import joinClubBg from "../../../assets/Images/join_club.jpg";

const JoinClub = () => {
  const handleRequest = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    if (!(email && name)) {
      return Swal.fire({
        position: "center",
        icon: "warning",
        title: "Please provide name & email",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Request has been send",
      showConfirmButton: false,
      timer: 1500,
    });

    e.target.reset();
  };
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-800 lg:py-32 lg:flex lg:justify-center">
        <div className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-md">
          <div className="lg:w-1/2">
            <div className="h-64 bg-cover flex flex-grow lg:h-full">
              <img src={joinClubBg} alt="" />
            </div>
          </div>

          <div className="max-w-xl px-6 py-12 lg:max-w-5xl dark:bg-[#212121] lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-5xl">
              Join Our <span className="text-[#FF9F66]">Sports</span> Club
            </h2>

            <p className="mt-4 text-[#999] ">
              Joining a sports club can be a thrilling journey towards fitness,
              camaraderie, and personal growth. Whether you are a seasoned
              athlete or a beginner, there is a place for everyone in the
              vibrant community of a sports club. From honing your skills to
              forging lifelong friendships, each practice session and game
              brings opportunities for fun and improvement. Embrace the
              excitement and vitality of sports by becoming a member today
            </p>

            <form onSubmit={handleRequest} className="mt-4  w-full  ">
              <div className="flex gap-6 mt-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full rounded-md border p-2 outline-none"
                  id=""
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="border w-full p-2 outline-none rounded-md"
                  id=""
                />
              </div>
              <button
                type="submit"
                className="px-5  mt-6  tracking-wider text-sm md:text-[16px] border border-[#FF9F66] hover:border-[#FF9F66] bg-[#FF9F66] hover:bg-white  hover:text-[#94999f] ease-in-out duration-300 text-white  py-3 rounded-md font-bold flex gap-2 items-center"
              >
                Request Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinClub;
