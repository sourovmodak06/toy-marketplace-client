import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaRegEnvelope, FaStar, FaUser } from "react-icons/fa";
import useTitle from "../shared/hooks/useTitle";

const Details = () => {
  useTitle("Details");
  const detailsInfo = useLoaderData();
  const {
    toyUrl,
    toyName,
    sellerName,
    sellerPhoto,
    email,
    toyCategory,
    price,
    rating,
    quantity,
    description,
  } = detailsInfo;
  return (
    <div>
      <div>
        <h2 className="text-center underline decoration-wavy decoration-yellow-300 underline-offset-4 pb-5 text-[#385a64] text-4xl font-semibold uppercase">
          {toyName} Toy
        </h2>
        <div className="flex gap-4">
          <img src={toyUrl} alt="" className="w-1/2" />
          <div className="w-1/2 relative">
            <img
              src={sellerPhoto}
              alt=""
              className="w-80 h-80 border-4 border-yellow-300"
            />
            <div className="absolute bg-[#54b7be] text-white w-80 p-5  top-[30%] left-1/3 rounded-3xl">
              <div className="flex font-medium text-xl items-center gap-2">
                <FaUser></FaUser>
                <h2>{sellerName}</h2>
              </div>
              <div className="flex font-medium text-xl items-center gap-2">
                <FaRegEnvelope></FaRegEnvelope>
                <h2>{email}</h2>
              </div>
            </div>
            <div className="bg-[#54b7be33] my-10 p-5 rounded-tl-2xl rounded-bl-2xl">
              <h2 className="underline decoration-wavy decoration-yellow-300 underline-offset-4 pb-2 text-[#385a64] font-semibold uppercase">
                Detail Description
              </h2>
              <h2>{description}</h2>
              <div className="flex gap-2 py-2">
                <h2 className="underline decoration-wavy decoration-yellow-300 underline-offset-4 pb-2 text-[#385a64] font-semibold uppercase">
                  Price:
                </h2>
                <h2 className="text-red-500 font-semibold">${price}</h2>
              </div>
              <div className="flex gap-2 py-2">
                <h2 className="underline decoration-wavy decoration-yellow-300 underline-offset-4 pb-2 text-[#385a64] font-semibold uppercase">
                  Category:
                </h2>
                <h2 className="font-semibold">{toyCategory}</h2>
              </div>
              <div className="flex gap-2 py-2">
                <h2 className="underline decoration-wavy decoration-yellow-300 underline-offset-4 pb-2 text-[#385a64] font-semibold uppercase">
                  Rating:
                </h2>
                <div className="flex font-medium  items-center gap-1">
                  <FaStar className="text-yellow-500"></FaStar>
                  <h2 className="font-semibold">{rating}</h2>
                </div>
              </div>
              <div className="flex gap-2 py-2">
                <h2 className="underline decoration-wavy decoration-yellow-300 underline-offset-4 pb-2 text-[#385a64] font-semibold uppercase">
                Available Quantity:
                </h2>
                <h2 className="font-semibold">{quantity}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
