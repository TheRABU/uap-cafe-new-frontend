import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { toast } from "react-toastify";

const AllReview = () => {
  const axios = useAxiosPublic();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch reviews
  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      setError(null); // Reset error state

      try {
        const response = await axios.get("/allReview");
        setReviews(response.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to fetch reviews. Please try again later.");
        toast.error("Failed to load reviews.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [axios]);

  return (
    <div>
      <div className="md:flex justify-between items-center my-7 px-4">
        <h2 className="text-3xl font-bold text-[#1F2544]">Reviews</h2>
        <h2 className="text-3xl font-bold text-[#1F2544]">
          Total Reviews: {reviews.length}
        </h2>
      </div>

      <div className="container p-4 mx-auto sm:p-4 dark:text-gray-800">
        <div className="overflow-x-auto h-[75vh] border border-gray-200 rounded-md">
          {loading ? (
            <div className="text-center py-10">
              <p className="animate-spin text-lg">Loading...</p>
            </div>
          ) : error ? (
            <div className="text-center text-red-500 py-10">{error}</div>
          ) : reviews.length > 0 ? (
            <table className="min-w-full text-sm">
              <thead className="bg-[#1F2544] text-white sticky top-0 z-10">
                <tr>
                  <th className="p-3">No</th>
                  <th className="p-3">Review ID</th>
                  <th className="p-3">Order ID</th>
                  <th className="p-3">Food ID</th>
                  <th className="p-3">Review Text</th>
                  <th className="p-3">Rating</th>
                  <th className="p-3">Customer Email</th>
                  <th className="p-3">Seller Email</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review, index) => (
                  <tr
                    key={review._id}
                    className={`border-b ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-gray-100`}
                  >
                    <td className="p-3 text-center">{index + 1}</td>
                    <td className="p-3 break-all">{review._id}</td>
                    <td className="p-3">{review.orderId}</td>
                    <td className="p-3">{review.foodId}</td>
                    <td className="p-3">{review.reviewText}</td>
                    <td className="p-3 text-center">{review.rating}</td>
                    <td className="p-3 break-all">{review.userEmail}</td>
                    <td className="p-3 break-all">{review.sellerEmail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center py-10">No reviews found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllReview;
