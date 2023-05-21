import React, { useEffect, useState } from "react";

const Product = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://superherotoystore-server-side.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="flex gap-5 py-5">
      {items.map((item) => (
        <div key={item._id}>
          <div className="w-96 h-96 relative">
            <img src={item.pImg} alt="P-Img" className="w-96 h-96" />
            <div className="opacity-0 hover:opacity-100 delay-150 absolute top-0 cursor-pointer">
            <div className="w-96 h-96 bg-[#00000069] flex items-end justify-center">
                <h2 className="text-2xl font-light text-white px-5 pb-3">{item.text}...</h2>
            </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
