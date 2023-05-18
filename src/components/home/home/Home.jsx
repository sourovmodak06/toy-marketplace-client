import React from "react";
import useTitle from "../../shared/hooks/useTitle";
import Carousel from "../carousel/Carousel";

const Home = () => {
  useTitle('Home');
  return (
    <div>
      <Carousel></Carousel>
    </div>
  );
};

export default Home;
