import React from "react";
import useTitle from "../../shared/hooks/useTitle";
import Carousel from "../carousel/Carousel";
import Gallery from "../gallery/Gallery";

const Home = () => {
  useTitle('Home');
  return (
    <div>
      <Carousel></Carousel>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
