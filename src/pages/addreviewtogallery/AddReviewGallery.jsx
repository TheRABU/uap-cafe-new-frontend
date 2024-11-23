import { useContext } from "react";
import { AuthContext } from "../../providers/AuthenticationProvider";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const AddReviewGallery = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const AxiosPublic = useAxiosPublic();
  // Add review handler
  const handleClientReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user?.displayName;
    const email = user?.email;
    const userProfile = user?.photoURL;
    const reviewDescription = form.reviewDescription.value;
    const imgUrl = form.imgUrl.value;

    const clientReview = {
      name,
      email,
      reviewDescription,
      imgUrl,
      userProfile,
    };
    AxiosPublic.post("/clientReview", clientReview)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Thank you for your review",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            navigate("/");
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <div className="h-full bg-[#ffffff] mx-auto px-8 lg:px-20 my-10 lg:my-20">
        <h1 className="text-2xl text-center mb-5">
          Client review about Foodie Bite team
        </h1>
        <section className="max-w-4xl p-6 mx-auto bg-pink-50 rounded-md shadow-md dark:bg-gray-800">
          <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
            Write a Review
          </h2>

          <form onSubmit={handleClientReview}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="username"
                >
                  Name
                </label>
                <input
                  id="username"
                  name="name"
                  type="text"
                  disabled={true}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="emailAddress"
                >
                  Email Address
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  disabled={true}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="reviewDescription"
                >
                  Review Description
                </label>
                <input
                  id="reviewDescription"
                  name="reviewDescription"
                  required={true}
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="passwordConfirmation"
                >
                  Img url
                </label>
                <input
                  id="imgUrl"
                  name="imgUrl"
                  type="text"
                  required={true}
                  placeholder="https://imgbb.com links"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Post Review
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default AddReviewGallery;
