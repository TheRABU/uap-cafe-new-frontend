import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../providers/AuthenticationProvider";
import { useContext, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
const SignupPage = () => {
  const axiosPublic = useAxiosPublic();
  const [showPass, setShowPass] = useState(false);
  const [matchedPassword, setMatchedPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);

  //toastify style
  const notify = () => {
    toast("Default Notification !");

    toast.success("Success Notification !", {
      position: "top-center",
    });

    toast.error("Error Notification !", {
      position: "top-center",
    });

    toast.warn("Warning Notification !", {
      position: "bottom-left",
    });

    toast.info("Info Notification !", {
      position: "bottom-center",
    });

    toast("Custom Style Notification with css class!", {
      position: "bottom-right",
      className: "foo-bar",
    });
  };

  // form handler
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // if (password === confirmPassword) {
    //   setMatchedPassword(false);
    // } else if (password !== confirmPassword) {
    //   setMatchedPassword(true);
    //   Swal.fire("passwords do not match");
    //   return;
    // }
    if (password.length < 6) {
      toast.error("Password should be at least 6 characters long");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error(
        "Your password should have at least one uppercase character!"
      );
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.error(
        "Your password should have at least one lowercase character!"
      );
      return;
    } else if (password !== confirmPassword) {
      setMatchedPassword(true);
      Swal.fire("Passwords do not match");
      return;
    }
    createUser(email, password)
      .then(() => {
        const userInfo = {
          name: name,
          email: email,
          role: "user",
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            toast.success("User created successfully");
          }
        });
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Registration Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorMsg = error.message;
        console.log("Error occurred", errorMsg);
      });
  };
  return (
    <>
      <section className="bg-white ">
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
          <form onSubmit={handleSignUp} className="w-full max-w-md">
            <h1 className="mt-3 text-center text-2xl font-semibold text-gray-800 capitalize sm:text-3xl">
              Sign Up
            </h1>

            <div className="flex items-center justify-center mt-6">
              <Link
                to="/login"
                className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b "
              >
                sign in
              </Link>

              <Link
                to="/sign-up"
                className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 "
              >
                sign up
              </Link>
            </div>

            <div className="relative flex items-center mt-8">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>

              <input
                type="text"
                name="name"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11    focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Name"
              />
            </div>

            <div className="relative flex items-center mt-6">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>

              <input
                type="email"
                name="email"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email address"
              />
            </div>

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>

              <input
                type={showPass ? "text" : "password"}
                name="password"
                className={
                  matchedPassword
                    ? "block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg   focus:border-red-500 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    : `block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40`
                }
                placeholder="Password"
              />
              <span
                onClick={() => setShowPass(!showPass)}
                className="absolute top-4 right-3"
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>

              <input
                type={showPass ? "text" : "password"}
                name="confirmPassword"
                className={
                  matchedPassword
                    ? "block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg   focus:border-red-500 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    : `block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40`
                }
                placeholder="Confirm Password"
              />
              <span
                onClick={() => setShowPass(!showPass)}
                className="absolute top-4 right-3"
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="mt-6">
              <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Sign Up
              </button>

              <div className="mt-6 text-center ">
                <Link
                  to="/login"
                  className="text-sm text-blue-500 hover:underline "
                >
                  Already have an account?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
      <ToastContainer onClick={notify} />
    </>
  );
};

export default SignupPage;
