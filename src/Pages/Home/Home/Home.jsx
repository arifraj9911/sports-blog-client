import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Newsletter from "../Newsletter/Newsletter";
import RecentBlogs from "../RecentBlogs/RecentBlogs";
import JoinClub from "../JoinClub/JoinClub";
import MobileApp from "../MobileApp/MobileApp";
import Testimonial from "../Testimonial/Testimonial";


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
      <Testimonial></Testimonial>
      <Newsletter></Newsletter>
      
    </div>
  );
};

export default Home;
