// import Nav from "../Pages/Shared/Navbar";

import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Home/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto  mb-16">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
};

export default Main;
