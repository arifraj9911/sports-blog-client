import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Newsletter from "../Newsletter/Newsletter";
import RecentBlogs from "../RecentBlogs/RecentBlogs";
import JoinClub from "../JoinClub/JoinClub";
import MobileApp from "../MobileApp/MobileApp";
// import ScrollButton from "../../Shared/ScrollButton/ScrollButton";
import { GoArrowUp } from "react-icons/go";
import { useEffect, useState } from "react";
import './Home.css'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <div>
      <Helmet>
        <title>Sports Eye | Home</title>
      </Helmet>
      <Banner></Banner>
      <RecentBlogs></RecentBlogs>
      <JoinClub></JoinClub>
      <MobileApp></MobileApp>
      <Newsletter></Newsletter>
      <button
      className={`scroll-btn ${
        isVisible ? "show" : "hide"
      } flex items-center gap-1`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <span>Top</span>
      <span>
        <GoArrowUp />
      </span>
    </button>
    </div>
  );
};

export default Home;
