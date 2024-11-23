import { useContext, useState } from "react";
import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AuthContext } from "../../providers/AuthenticationProvider";
import Swal from "sweetalert2";

import useAxiosPublic from "../../hooks/useAxiosPublic";

const PurchaseNowPage = () => {
  const foodDetail = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const { image, name, category, price, _id, Quantity } = foodDetail;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [counter, setCounter] = useState(1);

  // increment decrement button handlers
  const incrementCount = () => {
    if (counter < Quantity) {
      setCounter(counter + 1);
    }
  };
  const decrementCount = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  // handle order function

  const handleOrder = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user.displayName;
    const email = user.email;
    const date = form.date.value;
    const area = form.area.value;
    const state = form.state.value;
    const city = form.city.value;
    const postCode = form.postCode.value;

    const orderValue = {
      name,
      email,
      date,
      area,
      state,
      city,
      postCode,
      FoodName: foodDetail.name,
      FoodImage: foodDetail.image,
      Price: foodDetail.price,
      orderQuantity: counter,
    };

    try {
      const res = await axiosPublic.post(`/order`, orderValue);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Order Confirmed",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navigate("/");
        });
      }
    } catch (error) {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: `${error.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }

    // axios
    //   .post("http://localhost:5000/order", orderValue)
    //   .then((response) => {
    //     if (response.data.insertedId) {
    //       Swal.fire({
    //         position: "top-center",
    //         icon: "success",
    //         title: "Order Confirmed",
    //         showConfirmButton: false,
    //         timer: 1500,
    //       }).then(() => {
    //         navigate("/");
    //       });
    //     }

    //     navigate(location?.pathname ? location.pathname : "/");
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });
  };

  return (
    <>
      <div className="flex-row lg:flex items-center justify-center py-12 px-6 lg:px-16">
        <div>
          <div className="max-w-md mx-auto rounded-md shadow-md bg-gray-900 text-gray-100">
            <img
              src={image}
              alt=""
              className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                <p className="text-gray-100">BDT {price}</p>
                <p className="text-gray-100">Left {Quantity}</p>

                <div
                  className="py-2 px-3 inline-block bg-white border border-gray-200 rounded-lg dark:bg-neutral-900 dark:border-neutral-700"
                  data-hs-input-number=""
                >
                  <div className="flex items-center gap-x-1.5">
                    <button
                      onClick={decrementCount}
                      type="button"
                      className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                      data-hs-input-number-decrement=""
                    >
                      <svg
                        className="flex-shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                      </svg>
                    </button>
                    <label htmlFor="orderQuantity">Order Quantity</label>
                    <input
                      className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 dark:text-white"
                      type="text"
                      value={counter}
                      readOnly
                      placeholder="Quantity"
                      data-hs-input-number-input=""
                    />
                    <button
                      onClick={incrementCount}
                      type="button"
                      className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                      data-hs-input-number-increment=""
                    >
                      <svg
                        className="flex-shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <Link to="/all-foods">
                <button className="btn w-full mx-auto px-10 bg-violet-50">
                  Browse more
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* FORM */}
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <form onSubmit={handleOrder}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                disabled={true}
                defaultValue={user.displayName}
                placeholder="Enter your Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                disabled={true}
                defaultValue={user.email}
                placeholder="Enter your email"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="date"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    required={true}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="time"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    id="time"
                    required={true}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="mb-5 pt-3">
              <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                Address Details
              </label>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="area"
                      id="area"
                      placeholder="Enter area"
                      required={true}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="Enter city"
                      required={true}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="state"
                      id="state"
                      placeholder="Enter state"
                      required={true}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="postCode"
                      id="post-code"
                      placeholder="Post Code"
                      required={true}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="hover:shadow-form w-full rounded-md bg-[#FF204E] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Order Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PurchaseNowPage;
