import React from "react";
import useTitle from "../../shared/hooks/useTitle";
import Carousel from "../carousel/Carousel";
import Gallery from "../gallery/Gallery";
import Suggest from "../suggest/Suggest";
import PopularProducts from "../popularProducts/PopularProducts";
import Discount from "../discount/Discount";
import CategoryTabs from "../categoryTabs/CategoryTabs";

const Home = () => {
  useTitle('Home');
  return (
    <div>
      <Carousel></Carousel>
      <Gallery></Gallery>
      <CategoryTabs></CategoryTabs>
      <Suggest></Suggest>
      <PopularProducts></PopularProducts>
      <Discount></Discount>
    </div>
  );
};

export default Home;
