import { Link } from "react-router-dom";

const FoodCard = ({ eachFood }) => {
  const { name, image, category, price, recipe, _id } = eachFood;
  return (
    <>
      <div className=" overflow-hidden shadow-lg flex flex-col p-3 rounded-xl">
        <div className="relative">
          <Link to={`/details/${_id}`}>
            {image ? (
              <img
                className="w-full h-80 rounded-xl"
                src={image}
                alt="FoodImage"
              />
            ) : (
              <img
                className="w-full"
                src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                alt="FoodImage"
              />
            )}
            <div className="hover:bg-transparent rounded-xl transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
          </Link>
          <a href="#!">
            <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              Cooking
            </div>
          </a>
        </div>
        <div className="px-6 py-4 mb-auto">
          <a
            href="#"
            className="font-medium text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
          >
            {name}
          </a>
          <h2 className="text-black font-semibold text-lg">BDT {price}</h2>
          <p className="text-gray-500 text-sm">{recipe}</p>
          <p className="text-neutral-800 text-md font-semibold">
            Category: {category}
          </p>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
