import { Link } from "react-router-dom";
import useSingleFoodDetails from "../../hooks/useSingleFoodDetails";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SingleFoodDetails = () => {
  const axios = useAxiosPublic();
  const [details, loading] = useSingleFoodDetails();
  const { name, category, image, _id, price, recipe } = details;
  const [reviews, setReviews] = useState([]);
  const [loadingg, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Helper function to mask email
  const maskEmail = (email) => {
    const [localPart, domain] = email.split("@");
    const visiblePart = localPart.slice(0, 2); // Show the first 2 characters of the local part
    const hiddenPart = "*".repeat(localPart.length - 2); // Replace the rest with '*'
    return `${visiblePart}${hiddenPart}@${domain}`;
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/reviews/${_id}`); // Adjust API endpoint as necessary
        setReviews(response.data.data);
      } catch (err) {
        console.error(err);
        setError("No reviews available for this food.");
      } finally {
        setLoading(false);
      }
    };

    if (_id) {
      fetchReviews();
    }
  }, [_id]);
  console.log(details);
  console.log(error);
  if (loading) return <p>Loading...</p>;
  if (loadingg) return <p>Loading...</p>;
  if (!details) return <p>Food item not found.</p>;

  return (
    <>
      <section data-aos="fade-left" className="bg-[#ffffff] px-4 lg:px-28">
        <h3 className="text-3xl pt-5 font-serif text-center">{name}</h3>
        <div className="container  py-10 mx-auto">
          <div className="lg:flex lg:-mx-6">
            <div className="lg:w-3/4 lg:px-6">
              <img
                className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
                src={image}
                alt="food image"
              />

              <div>
                <h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 ">
                  {name}
                </h1>
                {/* Problematic div in mobile device */}
                <div className="flex-row md:flex items-center mt-6">
                  <div className="hidden md:flex">
                    <img
                      className="object-cover object-center w-10 h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                      alt=""
                    />
                  </div>

                  <div className="mx-0 py-3 md:mx-4 ">
                    <p className="text-sm text-gray-500 ">Made By</p>
                    <h1 className="text-sm text-gray-700 "></h1>
                  </div>
                  <div className="flex-row mr-3 flex-1 md:flex items-center lg:gap-x-3">
                    <Link
                      to={`/purchase/${_id}`}
                      className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
                    >
                      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </span>
                      <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                        Purchase
                      </span>
                      <span className="relative invisible">Purchase</span>
                    </Link>
                  </div>
                </div>
                {/* REVIEWS */}
                <div className="grid grid-cols-1 w-full md:w-4/6 gap-y-8 md:mr-28 px-3 my-10">
                  <h3 className="text-lg font-semibold">Food Reviews</h3>
                  {loadingg ? (
                    <p>Loading reviews...</p>
                  ) : error ? (
                    <p className="text-red-500">{error}</p>
                  ) : reviews.length > 0 ? (
                    reviews.map((review) => (
                      <div
                        key={review._id}
                        className="p-4 bg-white shadow-lg rounded-lg border border-gray-200"
                      >
                        <div className="flex items-center mb-3">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-white text-xl font-bold">
                            {review.userEmail[0].toUpperCase()}
                          </div>
                          <div className="ml-3">
                            <h4 className="text-sm font-medium text-gray-800">
                              {maskEmail(review.userEmail)}
                            </h4>
                            <p className="text-xs text-gray-500">
                              {new Date(review.createdAt).toLocaleString()}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-700">{review.reviewText}</p>
                        <div className="mt-3">
                          <span className="text-yellow-500 text-sm font-semibold">
                            Rating: {review.rating} ⭐
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">
                      No reviews available for this food item.
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
              <div>
                <h3 className="text-blue-500 capitalize">Category</h3>
                <p className="text-xl font-medium">{category}</p>
              </div>

              <hr className="my-6 border-gray-200 " />
              <hr />
              <div className="">
                <h3 className="text-blue-500 capitalize ml-2">Price</h3>
                <span className="badge badge-info text-white font-semibold">
                  {price}
                </span>
                <p className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 ">
                  Order Now!!
                </p>
              </div>

              <hr className="my-6 border-gray-200 dark:border-gray-700" />

              <hr className="my-6 border-gray-200 dark:border-gray-700" />

              <div>
                <h3 className="text-blue-500 capitalize">Description</h3>

                <p className="text-xl font-medium">{recipe}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleFoodDetails;
