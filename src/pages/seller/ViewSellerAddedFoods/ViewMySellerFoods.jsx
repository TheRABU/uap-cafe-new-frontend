import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthenticationProvider";
import axios from "axios";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const ViewMySellerFoods = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const AxiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await AxiosPublic.get(`/api/food/${user?.email}`);
        console.log(res.data);
        setOrders(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [AxiosPublic, user?.email]);

  // DELETE FOOD
  const handleDeleteOrder = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/api/food/${_id}`)
          .then((response) => {
            if (response.status === 200) {
              const remaining = orders.filter((ord) => ord._id !== _id);
              setOrders(remaining);
              Swal.fire(
                "Deleted!",
                "Your food item has been deleted.",
                "success"
              );
            } else {
              console.log("Failed to delete food item");
            }
          })
          .catch((error) => {
            console.log("Sorry, could not delete", error);
          });
      }
    });
  };

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <img
          className="w-20 h-20 animate-spin"
          src="https://www.svgrepo.com/show/474682/loading.svg"
          alt="Loading icon"
        />
      </div>
    );
  }

  return (
    <>
      <div className="w-full px-5 h-full bg-[#ffffff]">
        <h2 className="text-center text-3xl">My Added Food Items</h2>
        <div className="overflow-x-auto mt-6">
          <table className="table table-zebra">
            {/* Table Head */}
            <thead>
              <tr>
                <th>Serial No.</th>
                <th>Email</th>
                <th>Image</th>
                <th>Food Name</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {orders.map((order, index) => (
                <tr key={order._id}>
                  <th>{index + 1}</th>
                  <td>{order.email}</td>
                  <td>
                    <img
                      src={order.image || "https://via.placeholder.com/150"}
                      alt="Food"
                      className="w-16 h-16 rounded-lg"
                    />
                  </td>
                  <td>{order.name}</td>
                  <td>BDT {order.price}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteOrder(order._id)}
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ViewMySellerFoods;
