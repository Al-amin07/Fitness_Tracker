import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Sidebar/Sidebar";

const DashBoard = () => {
  return (
    <div className="flex gap-12">
      <div className="">
        <Sidebar />
      </div>
      <div className=" lg:ml-[320px] mt-16 w-full pr-24">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
