import { Helmet } from "react-helmet";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Featured from "./Featured";
import MostBooked from "./MostBooked";
import RecentPosts from "./RecentPosts";
import Subscription from "./Subscription";

import Team from "./Team";

import Testimonial from "./Testimonial";
const Home = () => {
  return (
    <div className="space-y-20 px-4">
      <Helmet>
        <title> FitnessSynced | Home</title>
      </Helmet>

      <Banner />
      <Featured />
      <AboutUs />
      <MostBooked />
      <Testimonial />
      <Subscription />
      <RecentPosts />
      <Team />
    </div>
  );
};

export default Home;
