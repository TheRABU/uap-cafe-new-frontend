import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthenticationProvider";
import toast, { Toaster } from "react-hot-toast";

const SellerReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_BASE_URL = "http://localhost:5000"; // Ensure backend base URL is correct

  // Fetch orders
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/sellerReview/${user.email}`
        );
        setReviews(response.data);
      } catch (error) {
        console.error("Error occurred while fetching orders:", error);
        toast.error("Failed to load orders.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user.email]);

  if (loading) {
    return (
      <div className="h-screen flex gap-4 p-4 flex-wrap justify-center items-center">
        <img
          className="w-20 h-20 animate-spin"
          src="https://www.svgrepo.com/show/474682/loading.svg"
          alt="Loading icon"
        />
      </div>
    );
  }

  return (
    <div>
      <div className="md:flex justify-evenly my-7">
        <h2 className="text-3xl font-bold text-center text-[#1F2544]">
          Reviews
        </h2>
        <h2 className="text-3xl font-bold text-center text-[#1F2544]">
          Total Reviews: {reviews.length}
        </h2>
      </div>

      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="bg-[#1F2544] text-white">
              <tr className="text-left">
                <th className="p-3">No</th>
                <th className="p-3">Review Id</th>
                <th className="p-3">Order Id</th>
                <th className="p-3">Food Id</th>
                <th className="p-3">Review Text</th>
                <th className="p-3">Rating</th>
                <th className="p-3">Customer Email</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review, index) => (
                <tr
                  key={review._id}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{review._id}</td>

                  <td className="p-3">{review.orderId}</td>
                  <td className="p-3">{review.foodId}</td>
                  <td className="p-3">{review.reviewText}</td>
                  <td className="p-3">{review.rating}</td>
                  <td className="p-3">{review.userEmail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default SellerReview;
