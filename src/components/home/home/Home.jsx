import React from "react";
import useTitle from "../../shared/hooks/useTitle";
import Carousel from "../carousel/Carousel";
import Gallery from "../gallery/Gallery";
import Suggest from "../suggest/Suggest";

const Home = () => {
  useTitle('Home');
  return (
    <div>
      <Carousel></Carousel>
      <Gallery></Gallery>
      <Suggest></Suggest>
    </div>
  );
};

export default Home;
