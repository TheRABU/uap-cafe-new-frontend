import { useContext } from "react";
import { AuthContext } from "../../providers/AuthenticationProvider";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const AddFoodRequest = () => {
  const { user } = useContext(AuthContext);
  const AxiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleAddRequest = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user?.displayName;
    const email = user?.email;
    const foodName = form.foodName.value;
    const description = form.description.value;

    const customRequest = {
      name,
      email,
      foodName,
      description,
    };
    AxiosPublic.post("/addRequest", customRequest)
      .then((response) => {
        if (response.data.insertedId) {
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
      })
      .catch((error) => {
        console.log("Sorry could not Add your request at the moment", error);
      });
  };

  return (
    <div className="bg-[#ffffff] h-auto mx-auto py-10 px-5 md:px-20 lg:px-32">
      <div className="text-center w-full md:w-4/6 mx-auto">
        <h1 className="text-xl md:text-3xl text-center font-serif text-black font-semibold">
          Add your custom food request
        </h1>
        <p className="text-lg md:text-xl text-center ">
          You can request your custom food request like "Foods made with less
          oil" or With extra onions or no Sugar at all
        </p>
      </div>
      <div className="mx-auto h-auto my-8 rounded-md p-5 w-full max-w-7xl bg-[#CAF4FF]">
        <form onSubmit={handleAddRequest}>
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
              defaultValue={user?.displayName}
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
              defaultValue={user?.email}
              placeholder="Enter your email"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="mx-auto">
            <div className="mb-5 pt-3">
              <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                What food would you like?
              </label>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="foodName"
                      id="foodName"
                      placeholder="Enter your food name"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
              <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                How are the ingredients should be?
              </label>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="description"
                      id="description"
                      placeholder="Enter your required custom food request in detail"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                >
                  Make Request
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFoodRequest;
