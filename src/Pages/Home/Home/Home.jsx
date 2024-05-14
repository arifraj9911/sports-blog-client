import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Newsletter from "../Newsletter/Newsletter";
import RecentBlogs from "../RecentBlogs/RecentBlogs";
import JoinClub from "../JoinClub/JoinClub";
import MobileApp from "../MobileApp/MobileApp";
import ScrollButton from "../../Shared/ScrollButton/ScrollButton";

const Home = () => {
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
      <ScrollButton></ScrollButton>
    </div>
  );
};

export default Home;
