import { Outlet } from "react-router-dom";

const AdminDashboardLayout = () => {
  return (
    <div className="w-full h-full bg-[#ffffff]">
      <Outlet />
    </div>
  );
};

export default AdminDashboardLayout;
