
import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Sidebar/Sidebar";

const DashBoard = () => {


  return (
    <div className="flex gap-12">
      <div>
        <Sidebar/>
      </div>
      <div className="md: ml-[20px] lg:ml-[350px] mt-16 w-full pr-24">
        <Outlet/>
      </div>
    </div>
  );
};

export default DashBoard;
