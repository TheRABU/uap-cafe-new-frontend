import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <img
          src="https://i.ibb.co.com/rMN2Sfb/5268671.png"
          alt="Cancel Icon"
          className="w-16 h-16 mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold text-yellow-600 mb-4">
          Payment Cancelled!
        </h2>
        <p className="text-gray-600 mb-6">
          Your payment was cancelled. If this was a mistake, you can try again
          later.
        </p>
        <Link
          to="/"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Cancel;
