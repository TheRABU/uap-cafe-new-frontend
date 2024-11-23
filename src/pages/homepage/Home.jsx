import AllfoodSection from "../../components/AllfoodSection";
import FoodsProvider from "../../providers/foodsProvider";

import CategorySection from "./Category/CategorySection";

import SwiperBanner from "./SliderBanner/SwiperBanner";

const Home = () => {
  return (
    <>
      <FoodsProvider>
        <div className="">
          <SwiperBanner />

          <div className="">
            <CategorySection />
          </div>
          <AllfoodSection />
        </div>
      </FoodsProvider>
    </>
  );
};

export default Home;
