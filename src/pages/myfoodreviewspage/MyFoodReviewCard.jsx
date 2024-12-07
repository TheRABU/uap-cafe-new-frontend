import { FaStar, FaTrashAlt, FaEdit } from "react-icons/fa";

const MyFoodReviewCard = ({ oneReview, handleDeleteReview }) => {
  const { _id, foodId, reviewText, rating, createdAt } = oneReview;

  return (
    <div className="shadow-lg p-5 rounded-lg border border-gray-200 bg-white hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold text-gray-800 mb-2">
        Food ID: <span className="text-blue-600">{foodId}</span>
      </h3>

      <p className="text-gray-700 mb-3">
        <strong>Review:</strong> {reviewText}
      </p>

      <div className="flex items-center mb-3">
        <span className="flex text-yellow-400">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`${
                index < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </span>
        <span className="ml-2 text-gray-600">({rating}/5)</span>
      </div>

      <p className="text-sm text-gray-500 mb-3">
        <strong>Reviewed On:</strong> {new Date(createdAt).toLocaleDateString()}
      </p>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => handleDeleteReview(_id)}
          className="flex items-center gap-2 px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 transition-colors duration-300"
        >
          <FaTrashAlt /> Delete
        </button>
      </div>
    </div>
  );
};

export default MyFoodReviewCard;
