import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

const PhotoCart = ({ item }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    alert("Added To The Favorite Item");
  };
  return (
    <div className="m-5 relative">
      <img src={item.photo} alt="img" className="max-w-full rounded-md" />
      <div onClick={handleClick} disabled={clicked}>
        {clicked ? (
          <FaHeart className="absolute bottom-2 text-2xl right-4 text-red-50"></FaHeart>
        ) : (
          <FaHeart className="absolute bottom-2 text-2xl right-4 text-red-700"></FaHeart>
        )}
      </div>
    </div>
  );
};

export default PhotoCart;
