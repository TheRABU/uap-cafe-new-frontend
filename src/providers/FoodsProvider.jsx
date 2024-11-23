import { createContext, useEffect, useState } from "react";

export const FoodContext = createContext(null);

const FoodsProvider = ({ children }) => {
  const [foods, setFoods] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("menu.json")
      .then((data) => data.json())
      .then((data) => {
        setFoods(data);
        // Extract unique categories from foods
        const uniqueCategories = [
          ...new Set(data.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);
      });
  }, []);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get("menu.json");
  //         const data = response.data;
  //         setFoods(data);
  //         setFilteredFoods(data);
  //       } catch (error) {
  //         console.error("Error fetching food data:", error);
  //       }
  //     };
  //     fetchData();
  //   }, []);

  //   useEffect(() => {
  //     const fetchCategories = () => {
  //       const uniqueCategories = [...new Set(foods.map((food) => food.category))];
  //       setCategories(uniqueCategories);
  //     };
  //     fetchCategories();
  //   }, [foods]);

  // Filter foods by selected category
  //   const filterByCategory = (category) => {
  //     if (category === "All") {
  //       setFilteredFoods(foods); // Show all foods when "All" is selected
  //     } else {
  //       const filtered = foods.filter((food) => food.category === category);
  //       setFilteredFoods(filtered);
  //     }
  //   };

  return (
    <FoodContext.Provider
      value={{ foods, categories, selectedCategory, setSelectedCategory }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export default FoodsProvider;
