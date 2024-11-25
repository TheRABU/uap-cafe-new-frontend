import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthenticationProvider";
import axios from "axios";
import Swal from "sweetalert2";
import SoldItemsCard from "./SoldItemsCard";
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

        setOrders(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [AxiosPublic, user?.email]);
  const handleDeleteOrder = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`http://localhost:5000/api/food/${_id}`)
            .then((response) => {
              if (response.status === 200) {
                const remaining = orders.filter((ord) => ord._id !== _id);
                setOrders(remaining);
                Swal.fire(
                  "Deleted!",
                  "Your order has been deleted.",
                  "success"
                );
              } else {
                console.log("Failed to delete order");
              }
            });
        }
      })
      .catch((error) => {
        console.log("Sorry, could not delete", error);
      });
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
    <>
      <div className="w-full px-5 h-full bg-[#ffffff]">
        <h2 className="text-center text-3xl "> My Added Food Items</h2>
        <section className="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto px-3 lg:px-20">
          {orders.map((order) => (
            <SoldItemsCard
              key={order._id}
              orders={order}
              handleDeleteOrder={handleDeleteOrder}
              setOrders={setOrders}
              order={order}
            />
          ))}
        </section>
      </div>
    </>
  );
};

export default ViewMySellerFoods;
