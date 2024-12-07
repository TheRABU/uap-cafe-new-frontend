import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthenticationProvider";
import useUser from "../hooks/useUser";

const UserDropdown2 = () => {
  const [users] = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
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
  ];

  const adminOptions = [
    { name: "Manage Users", path: "/manage-users" },
    { name: "All Order", path: "/all-order" },
    { name: "All Food", path: "/all-food" },
  ];

  // Determine the options based on the role
  let roleSpecificOptions = [];
  if (users.role === "user") {
    roleSpecificOptions = userOptions;
  } else if (users.role === "seller") {
    roleSpecificOptions = sellerOptions;
  } else if (users.role === "admin") {
    roleSpecificOptions = adminOptions;
  }

  // Combine common options with role-specific options
  const menuOptions = [...commonOptions, ...roleSpecificOptions];

  // handle logout
  const handleLogOut = () => {
    logOut().then().catch();
  };
  return (
    <>
      <div className="relative inline-block">
        {/* Dropdown toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center focus:outline-none"
        >
          <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
            {user?.photoURL ? (
              <img
                className="object-cover w-full h-full"
                src={user.photoURL}
                alt="user photo"
              />
            ) : (
              <img
                src="https://cdn.imgbin.com/15/10/13/imgbin-computer-icons-user-profile-avatar-profile-LJbrar10nYY8mYWt0CUXZ8CxE.jpg"
                className="object-cover w-full h-full"
                alt="avatar"
              />
            )}
          </div>
        </button>

        {/* Dropdown menu */}
        {isOpen && (
          <div
            className="absolute -right-30 lg:right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl"
            onMouseLeave={() => setIsOpen(false)}
          >
            {menuOptions.map((option, index) => (
              <Link
                key={index}
                to={option.path}
                className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
              >
                {option.name}
              </Link>
            ))}

            <hr className="border-gray-200" />

            <Link
              onClick={handleLogOut}
              className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
            >
              Sign Out
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default UserDropdown2;
