import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthenticationProvider";
import UserDropdown from "../components/UserDropdown";
import SearchBar from "./SearchBar";
import UserDropdown2 from "./UserDropdown2";

const NavBar = () => {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  console.log(user);
  const navLinks = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/about",
      title: "About us",
    },
    {
      path: "/login",
      title: "Login",
    },
    {
      path: "/sign-up",
      title: "Sign up",
    },
  ];

  return (
    <>
      <div className="navbar bg-[#1B1919] sticky z-20 top-0 px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks.map((eachLink) => (
                // MOBILE
                <li
                  className="bg-slate-900 hover:bg-yellow-500 text-white hover:text-black py-3"
                  key={eachLink.path}
                >
                  {eachLink.title}
                </li>
              ))}
            </ul>
            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <Link
            to="/"
            className="btn btn-ghost text-2xl text-yellow-400 font-bold"
          >
            UapCafe
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-x-4">
            {navLinks.map((eachLink) => (
              // DESKTOP
              <Link
                to={eachLink.path}
                className="text-white hover:text-yellow-400 text-xl px-4 "
                key={eachLink.path}
              >
                {eachLink.title}
              </Link>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <SearchBar />
          <div className="flex items-center mt-4 lg:mt-0">
            {/*  */}
            {user ? (
              <UserDropdown />
            ) : (
              // <UserDropdown2 />
              <Link
                to="/login"
                className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
              >
                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                  <span className="relative text-white">Login</span>
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
