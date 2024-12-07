import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <img
          src="https://i.ibb.co.com/Mg3VGZh/7518748.png"
          alt="Success Icon"
          className="w-16 h-16 mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Payment Successful!
        </h2>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase! Your payment has been successfully
          processed.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Back to Home
          </Link>
          <Link
            to="/my-orders"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            View Orders
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
