import React from "react";
import Marquee from "react-fast-marquee";
import Product from "./Product";


const PopularProducts = () => {
    
  return (
    <div>
      <h2 className="text-center text-[#385a64] text-4xl font-semibold uppercase pb-5 md:pb-10 underline md:w-1/2 m-auto decoration-wavy decoration-yellow-300 underline-offset-4">
        Our Popular Products
      </h2>
      <Marquee pauseOnHover>
        <Product></Product>
      </Marquee>
    </div>
  );
};

export default PopularProducts;
