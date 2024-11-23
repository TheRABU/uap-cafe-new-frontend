import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthenticationProvider";
import axios from "axios";
import Swal from "sweetalert2";
import MyOrderCard from "./MyOrderCard";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = `http://localhost:5000/myOrders/${user.email}`;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setLoading(false);
        setOrders(response.data);
      })
      .catch((error) => {
        console.log("Error occurred during fetching your request", error);
      });
  }, [url]);

  const handleDeleteOrder = (_id) => {
    // const proceed = confirm("Are You sure you want to delete");
    // if (proceed) {
    //   fetch(`http://localhost:5000/order/${_id}`, {
    //     method: "DELETE",
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       if (data.deletedCount > 0) {
    //         alert("deleted successfully");
    //         const remaining = orders.filter((ord) => ord._id !== _id);
    //         setOrders(remaining);
    //       }
    //     });
    // }
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
            .delete(`http://localhost:5000/order/${_id}`)
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
    <div className="w-full px-5 h-full bg-[#ffffff]">
      <h2 className="text-center text-3xl "> My Ordered food items</h2>
      <section className="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto px-3 lg:px-20">
        {orders.map((order) => (
          // <div className="h-auto" key={order._id}>
          //   <div className="card bg-base-100 shadow-xl">
          //     <figure>
          //       <img
          //         src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          //         alt="Shoes"
          //       />
          //     </figure>
          //     <div className="card-body">
          //       <h2 className="card-title">{order.FoodName}</h2>
          //       <p>Quantity {order.orderQuantity}</p>
          //       <div className="card-actions justify-end">
          //         <button className="btn btn-error">Delete Order</button>
          //       </div>
          //     </div>
          //   </div>
          // </div>
          <MyOrderCard
            key={order._id}
            orders={orders}
            handleDeleteOrder={handleDeleteOrder}
            setOrders={setOrders}
            order={order}
          />
        ))}
      </section>
    </div>
  );
};

export default MyOrders;
