import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Modal = ({ modalInfo }) => {
  const { picture, name, price, rating } = modalInfo;
  return (
    <div>
      <input type="checkbox" id="details" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="details"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-2xl text-center font-bold pb-10">{name} Toy</h3>
          <img src={picture} alt="img" />
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
            <h2 className="font-semibold py-5">{rating}</h2>
            <h2 className="w-full text-end text-red-700 font-bold py-5">Price: ${price}</h2>
          </div>
          <h2 className="text-xl text-justify py-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos praesentium excepturi soluta facilis distinctio atque beatae dolorum explicabo repudiandae ex?</h2>
        </div>
      </div>
    </div>
  );
};

export default Modal;
