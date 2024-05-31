// import Nav from "../Pages/Shared/Navbar";

import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mb-16">
        <Outlet/>
      </div>
    </div>
  );
};

export default Main;
