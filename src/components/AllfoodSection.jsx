import FoodCard from "./FoodCard";

import useMenu from "../hooks/useMenu";

const AllfoodSection = () => {
  const [menu, loading] = useMenu();

  return (
    <>
      {loading ? (
        <div className="h-screen flex justify-center items-center">
          <span className="loading loading-bars loading-xl"></span>
        </div>
      ) : (
        <div className="container mx-auto mt-14">
          <div className="border-b mb-5 flex justify-between text-sm">
            <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
              <span className="font-semibold inline-block">
                Food Categories:
              </span>
            </div>
            <a href="#">See All</a>
          </div>
          <h1 className="text-3xl font-bold  text-teal-400 mb-5">All Foods</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {menu.map((eachFood, idx) => (
              <FoodCard key={idx} eachFood={eachFood} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AllfoodSection;
