import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";


const Cart = ({ product,handleClick }) => {
  const { _id,picture, name, price, rating } = product;
  
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={picture} alt="product-img" className="w-full h-72" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>Price: ${price}</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div>
                  {rating === 4.5 ? (
                    <div className="flex">
                      <FaStar className="text-[#ffc600]" />
                      <FaStar className="text-[#ffc600]" />
                      <FaStar className="text-[#ffc600]" />
                      <FaStar className="text-[#ffc600]" />
                      <FaStarHalfAlt className="text-[#ffc600]" />
                    </div>
                  ) : (
                    <div className="flex">
                      <FaStar className="text-[#ffc600]" />
                      <FaStar className="text-[#ffc600]" />
                      <FaStar className="text-[#ffc600]" />
                      <FaStar className="text-[#ffc600]" />
                      <FaStar className="text-[#ffc600]" />
                    </div>
                  )}
                </div>
                <h2 className="font-semibold">{rating}</h2>
              </div>
              <div>
                <label htmlFor="details" className="btn" onClick={() => handleClick(_id)}>
                  View Details
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
