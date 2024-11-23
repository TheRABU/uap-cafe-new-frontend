import { Link } from "react-router-dom";
import FoodByCategory from "../components/FoodByCategory";

const AllJuice = () => {
  return (
    <>
      <div className="h-2/3 container mx-auto mt-10  flex flex-wrap items-center justify-between gap-6 md:gap-10 p-4">
        <Link to={"/all-breakfast"}>
          <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-4 pb-6 pt-32 w-[260px] sm:w-[300px] md:w-[320px]">
            <img
              src="https://img.freepik.com/premium-photo/indian-aloo-paratha-bread-with-potato_762785-240465.jpg?semt=ais_hybrid"
              alt="Breakfast"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-2xl sm:text-3xl font-bold text-white">
              Breakfast
            </h3>
            <div className="z-10 text-sm leading-6 text-gray-300">
              Afternoon and evening snacks
            </div>
          </article>
        </Link>
        <Link to={"/all-MainDish"}>
          <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-4 pb-6 pt-32 w-[260px] sm:w-[300px] md:w-[320px]">
            <img
              src="https://img.freepik.com/premium-photo/directly-shot-vegetable-salad_1048944-24603143.jpg?w=740"
              alt="Main Dish"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-2xl sm:text-3xl font-bold text-white">
              Main Dish
            </h3>
            <div className="z-10 text-sm leading-6 text-gray-300">
              Rice and vegetables
            </div>
          </article>
        </Link>
        <Link to={"/all-juice"}>
          <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-4 pb-6 pt-32 w-[260px] sm:w-[300px] md:w-[320px]">
            <img
              src="https://img.freepik.com/free-photo/lemonade-with-lemon-mint-ice-cubes_176532-10727.jpg?t=st=1730227672~exp=1730231272~hmac=f5fa1bacd3c15a5329e1b4fb43d8cf94c4adb3e69e182f51355dd3b113ace7f3&w=360"
              alt="Drinks"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-2xl sm:text-3xl font-bold text-white">
              Drinks
            </h3>
            <div className="z-10 text-sm leading-6 text-gray-300">
              Mint lemonade and others
            </div>
          </article>
        </Link>
        <Link to={"/all-snacks"}>
          <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-4 pb-6 pt-32 w-[260px] sm:w-[300px] md:w-[320px]">
            <img
              src="https://img.freepik.com/premium-photo/fried-spring-rolls-cutting-board_1013720-1078.jpg?w=740"
              alt="Snacks"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-2xl sm:text-3xl font-bold text-white">
              Snacks
            </h3>
            <div className="z-10 text-sm leading-6 text-gray-300">
              Afternoon and evening snacks
            </div>
          </article>
        </Link>
      </div>
      <div>
        <FoodByCategory filter="Juice" category_title="All Juice" />
      </div>
    </>
  );
};

export default AllJuice;
