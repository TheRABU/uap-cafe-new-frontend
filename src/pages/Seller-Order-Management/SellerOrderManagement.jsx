import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthenticationProvider";
import toast, { Toaster } from "react-hot-toast";

const SellerOrderManagement = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_BASE_URL = "http://localhost:5000"; // Ensure backend base URL is correct

  // Fetch orders
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/myOrders/${user.email}`
        );
        setOrders(response.data);
      } catch (error) {
        console.error("Error occurred while fetching orders:", error);
        toast.error("Failed to load orders.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user.email]);

  // Handle status change
  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const res = await axios.patch(
        `${API_BASE_URL}/sellerOrder/status/${orderId}`,
        {
          status: newStatus,
        }
      );

      if (res.data.modifiedCount > 0) {
        toast.success("Order status updated successfully");

        // Update the orders state immediately
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order._id === orderId ? { ...order, status: newStatus } : order
          )
        );
      } else {
        toast.error(res.data.message || "Failed to update order status.");
      }
    } catch (error) {
      console.error("Error updating order status:", error);
      toast.error("An error occurred while updating order status.");
    }
  };

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
          Manage Order
        </h2>
        <h2 className="text-3xl font-bold text-center text-[#1F2544]">
          Total Orders: {orders.length}
        </h2>
      </div>

      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="bg-[#1F2544] text-white">
              <tr className="text-left">
                <th className="p-3">No</th>
                <th className="p-3">Order Id</th>
                <th className="p-3">Image</th>
                <th className="p-3">Food Name</th>
                <th className="p-3">Customer Name</th>
                <th className="p-3">Customer Email</th>
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
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{order._id}</td>
                  <td className="p-3">
                    <img
                      src={
                        order?.FoodImage || "https://via.placeholder.com/100"
                      }
                      alt="Food"
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  </td>
                  <td className="p-3">{order.FoodName}</td>
                  <td className="p-3">{order.name}</td>
                  <td className="p-3">{order.email}</td>
                  <td className="p-3">
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order._id, e.target.value)
                      }
                      className="border border-gray-300 p-2 rounded-md"
                    >
                      <option value="cooking">Cooking</option>
                      <option value="packed">Packed</option>
                      <option value="delivered">Delivered</option>
                    </select>
                  </td>
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

export default SellerOrderManagement;
