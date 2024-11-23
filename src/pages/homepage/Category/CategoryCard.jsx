import { useContext } from "react";
import useMenu from "../../../hooks/useMenu";
import { FoodContext } from "../../../providers/foodsProvider";

const CategoryCard = ({ eachCategory }) => {
  // const { setSelectedCategory } = useContext(FoodContext);
  // const [menu] = useMenu();
  // const category = menu.filter((item) => item.category);

  return (
    <div className="card image-full m-4 shadow-xl">
      <figure>
        <img
          src="https://img.freepik.com/premium-photo/plate-rice-with-slice-cucumber-corn_1293546-8496.jpg?w=740"
          alt="food"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{eachCategory}</h2>
      </div>
    </div>
  );
};

export default CategoryCard;
