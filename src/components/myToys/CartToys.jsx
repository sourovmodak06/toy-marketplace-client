import React from "react";
import { FaPenSquare, FaRegTrashAlt } from "react-icons/fa";

const CartToys = ({ toy }) => {
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
  } = toy;
  return (
    <>
      <tr>
        <td>
          <div className="relative">
            <img
              src={toyUrl}
              alt="Toy"
              className="w-20 h-20 border-2 border-black"
            />
            <div className="absolute bottom-2 right-9">
              <img
                src={sellerPhoto}
                alt="seller"
                className="w-10 h-10 border-2 border-black rounded-full"
              />
            </div>
          </div>
        </td>
        <td>
          <div>
            <h2>{sellerName}</h2>
            <h2>{email}</h2>
          </div>
        </td>
        <td>
          <h2>{toyName}</h2>
        </td>
        <td>
          <h2>{toyCategory}</h2>
        </td>
        <td>
          <h2>{price}</h2>
        </td>
        <td>
          <h2>{rating}</h2>
        </td>
        <td>
          <h2>{quantity}</h2>
        </td>
        <td >
          <div>{description.length > 1000 ? <h2>{description}</h2> : <h2>{description.slice(0,10)}...</h2>}</div>
        </td>
        <td>
            <FaPenSquare className="text-3xl"></FaPenSquare>
            <FaRegTrashAlt className="text-3xl text-red-500 mt-3"></FaRegTrashAlt>
        </td>
      </tr>
    </>
  );
};

export default CartToys;
