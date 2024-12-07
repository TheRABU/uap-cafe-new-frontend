import { useEffect, useState, useCallback } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import debounce from "lodash.debounce";

const AllOrder = () => {
  const axios = useAxiosPublic();
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch orders based on search term
  const fetchOrders = async (query) => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get(`/orders?search=${query}`);
      setOrders(res.data);
    } catch (err) {
      console.error("Error fetching orders:", err);
      setError("Failed to fetch orders. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Debounce search input
  const debouncedFetchOrders = useCallback(
    debounce((query) => fetchOrders(query), 300),
    []
  );

  useEffect(() => {
    debouncedFetchOrders(search);

    // Cleanup debounce on unmount
    return () => debouncedFetchOrders.cancel();
  }, [search, debouncedFetchOrders]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div className="md:flex justify-between items-center my-7 px-4">
        <h2 className="text-3xl font-bold text-[#1F2544]">Manage Orders</h2>
        <h2 className="text-3xl font-bold text-[#1F2544]">
          Total Orders: {orders.length}
        </h2>
      </div>
      <div className="mb-5 px-4">
        <fieldset className="w-full flex justify-center">
          <div className="relative border-2 border-[#1F2544] rounded-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="button"
                title="search"
                className="p-1 focus:outline-none focus:ring"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 dark:text-gray-800"
                >
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
              </button>
            </span>
            <input
              type="search"
              value={search}
              onChange={handleSearchChange}
              placeholder="Search orders..."
              className="w-64 rounded-md py-2 pl-10 text-sm sm:w-auto focus:outline-none dark:bg-gray-200 dark:text-gray-800"
            />
          </div>
        </fieldset>
      </div>
      <div className="container p-4 mx-auto sm:p-4 dark:text-gray-800">
        <div className="overflow-x-auto overflow-y-auto h-screen border border-gray-200 rounded-md">
          {loading ? (
            <div className="text-center">Loading...</div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : orders.length > 0 ? (
            <table className="min-w-full text-xs">
              <thead className="bg-[#1F2544] text-white sticky top-0 z-10">
                {/* Make the header sticky for better UX */}
                <tr className="text-left">
                  <th className="p-3">#</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Image</th>
                  <th className="p-3">Food Name</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr
                    key={order._id}
                    className={`border-b ${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    }`}
                  >
                    <td className="p-3 py-4">{index + 1}</td>
                    <td className="p-3 py-4">{order?.name || "N/A"}</td>
                    <td className="p-3 py-4">{order?.email || "N/A"}</td>
                    <td className="p-3 py-4">
                      <img
                        src={
                          order?.FoodImage || "https://via.placeholder.com/100"
                        }
                        alt={"Food Image"}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                    </td>
                    <td className="p-3 py-4">{order?.FoodName || "N/A"}</td>
                    <td className="p-3 py-4">{order?.status || "N/A"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center">No orders found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllOrder;
