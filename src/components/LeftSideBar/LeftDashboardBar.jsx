import { useContext } from "react";
import { AuthContext } from "../../providers/AuthenticationProvider";
import { Link, useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";
//import useIsSeller from "../../hooks/useIsSeller";

const LeftDashboardBar = () => {
  const [users] = useUser();
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  // const { isSeller } = useIsSeller(user?.email);
  const commonOptions = [{ name: "Dashboard", path: "/dashboard" }];

  const userOptions = [
    { name: "My ordered food item", path: "/my-orders" },
    { name: "My added reviews", path: "/myFoodReviews" },
    { name: "My custom food request", path: "/my-requests" },
    { name: "Add a custom food request", path: "/request" },
  ];

  const sellerOptions = [
    { name: "My added food items", path: "/seller-view-foods" },
    { name: " Add a food item", path: "/seller-add-item" },
    { name: "Orders", path: "/seller-orders" },
    { name: "Reviews", path: "/seller-reviews" },
  ];

  const adminOptions = [
    { name: "Manage Users", path: "/manage-users" },
    { name: "All Order", path: "/all-order" },
    { name: "All Food", path: "/all-food" },
    { name: "All Review", path: "/all-review" },
  ];

  //Determine the options based on the role
  let roleSpecificOptions = [];
  if (users.role === "user") {
    roleSpecificOptions = userOptions;
  } else if (users.role === "seller") {
    roleSpecificOptions = sellerOptions;
  } else if (users.role === "admin") {
    roleSpecificOptions = adminOptions;
  }

  //Combine common options with role-specific options
  const menuOptions = [...commonOptions, ...roleSpecificOptions];
  //handleLogout
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch();
  };
  return (
    <>
      <div className="hidden md:block min-h-screen p-3 space-y-2 w-2/6 bg-[#1F2544] text-gray-100">
        <div className="flex items-center p-2 space-x-4">
          <img
            src={user?.photoURL}
            alt=""
            className="w-12 h-12 rounded-full bg-gray-500"
          />
          <div>
            <h2 className="text-lg font-semibold">{user?.displayName}</h2>
          </div>
        </div>
        <div className="divide-y divide-gray-700">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            {menuOptions.map((option, index) => (
              <li key={index} className="bg-gray-800 text-gray-50">
                <Link
                  rel="noopener noreferrer"
                  to={option.path}
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current text-gray-400"
                  >
                    <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                  </svg>
                  <span>{option.name}</span>
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={handleLogOut}
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current text-gray-400"
                >
                  <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                  <rect width="32" height="64" x="256" y="232"></rect>
                </svg>
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LeftDashboardBar;
