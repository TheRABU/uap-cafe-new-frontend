import { useState } from "react";
import Swal from "sweetalert2";

const MyOrderCard = ({ orders, handleDeleteOrder, handlePostReview }) => {
  const {
    _id,
    FoodName,
    FoodImage,
    FoodId,
    orderQuantity,
    Price,
    name,
    email,
    deliveryDate,
    status,
    sellerEmail,
    deliveryTime,
    orderDate,
    orerTime,
  } = orders;

  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmitReview = () => {
    if (reviewText.trim() === "") {
      Swal.fire("Error", "Please write a review before submitting!", "error");
      return;
    }
    if (rating === 0) {
      Swal.fire("Error", "Please select a rating!", "error");
      return;
    }

    handlePostReview(_id, FoodId, sellerEmail, reviewText, rating); // Send review data to parent
    setReviewText("");
    setRating(0);
    setIsReviewModalOpen(false); // Close the modal
    Swal.fire("Success", "Your review has been submitted!", "success");
  };

  // Status steps
  const statusSteps = ["pending", "success", "cooking", "packed", "delivered"];
  const currentStepIndex = statusSteps.indexOf(status);
  // Status steps

  return (
    <div className="h-auto">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          {FoodImage ? (
            <img src={FoodImage} alt="Food" />
          ) : (
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Food Placeholder"
            />
          )}
        </figure>
        <div className="card-body">
          <div>
            <h2 className="card-title">{FoodName}</h2>
            <p>Quantity: {orderQuantity}</p>
          </div>
          <div className="text-center">
            <div className="text-left">
              <ul>
                <li>Name: {name}</li>
                <li>Email: {email}</li>
                <li>Order Id: {_id}</li>
                <li>Seller Email: {sellerEmail}</li>
                <li>Delivery Date: {deliveryDate}</li>
                <li>Delivery Time: {deliveryTime}</li>
                <li>Order Date: {orderDate}</li>
                <li>Order Time: {orerTime}</li>
              </ul>
            </div>
            <div className="block text-left">
              <ul>
                <li>Price: {Price}</li>
                <li>Status: {status}</li>
              </ul>
            </div>
          </div>

          <div className="card-actions justify-end mt-4">
            <button
              onClick={() => handleDeleteOrder(_id)}
              className="btn btn-error"
            >
              Delete Order
            </button>
            <button
              onClick={() => setIsReviewModalOpen(true)}
              className="btn btn-primary"
            >
              Review
            </button>
            <button
              onClick={() => setIsStatusModalOpen(true)}
              className="btn btn-info"
            >
              See Status
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Review */}
      {isReviewModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2">
            <h3 className="text-lg font-bold mb-4">Write a Review</h3>
            <textarea
              className="w-full border rounded-md p-2 mb-4"
              rows="3"
              placeholder="Write your review here..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />
            <div className="flex items-center gap-2 mb-4">
              <span className="font-semibold">Rating:</span>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    rating >= star ? "bg-yellow-500 text-white" : "bg-gray-300"
                  }`}
                >
                  {rating >= star ? "★" : "☆"}
                </button>
              ))}
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsReviewModalOpen(false)}
                className="btn btn-outline"
              >
                Cancel
              </button>
              <button onClick={handleSubmitReview} className="btn btn-success">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Status */}
      {isStatusModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2">
            <h3 className="text-lg font-bold mb-6 text-center">Order Status</h3>

            {/* Progress Bar and Steps */}
            <div className="relative w-full flex items-center justify-between">
              {/* Progress Bar */}
              <div className="absolute top-1/2 mt-3 left-0 w-full h-2 bg-gray-300 rounded-lg transform -translate-y-1/2">
                <div
                  className="h-2 bg-green-600 rounded-lg transition-all duration-300"
                  style={{
                    width: `${
                      (currentStepIndex / (statusSteps.length - 1)) * 100
                    }%`,
                  }}
                ></div>
              </div>

              {/* Status Points */}
              {statusSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center"
                >
                  {/* Status Name */}
                  <span
                    className={`mb-2 text-sm font-medium ${
                      index <= currentStepIndex
                        ? "text-green-600"
                        : "text-gray-500"
                    }`}
                  >
                    {step}
                  </span>
                  {/* Step Circle */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white z-10 ${
                      index <= currentStepIndex ? "bg-green-600" : "bg-gray-300"
                    }`}
                  >
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>

            {/* Current Status */}
            <p className="mt-6 text-center">
              Current Status:{" "}
              <span className="font-semibold text-green-600">{status}</span>
            </p>

            {/* Close Button */}
            <div className="flex justify-end mt-6">
              <button
                onClick={() => setIsStatusModalOpen(false)}
                className="btn btn-outline"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyOrderCard;
