import { Outlet } from "react-router-dom";
import LeftDashboardBar from "../components/LeftSideBar/LeftDashboardBar";
import NavBar from "../components/NavBar";

const DashboardLayout = () => {
  return (
    <>
      <NavBar />
      <div className="flex-row md:flex justify-between h-full">
        <LeftDashboardBar />
        <div className="w-full h-full bg-[#ffffff]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
