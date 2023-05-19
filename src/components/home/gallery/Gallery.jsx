import React, { useContext, useEffect, useState } from "react";
import "./gallery.css";
import { AuthContext } from "../../../providers/AuthProviders";
import { FaHeart } from "react-icons/fa";
import PhotoCart from "./PhotoCart";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const { loading } = useContext(AuthContext);
  

  useEffect(() => {
    fetch("http://localhost:5000/gallery")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);
  return (
    <div>
      <h2 className="text-center underline decoration-wavy decoration-yellow-300 underline-offset-4 pb-5 text-[#385a64] text-4xl font-semibold uppercase">
        Our Gallery
      </h2>

      <div className="gallery">
        {loading ? (
          <div>
            {photos.map(() => (
              <div className="border border-slate-400 shadow rounded-lg m-5 max-w-sm w-full mx-auto">
                <div className="animate-pulse relative">
                  <div className=" h-[50vh] bg-slate-700 rounded-md"></div>
                  <FaHeart className="absolute bottom-2 text-2xl right-4"></FaHeart>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            {photos.map((item) => (
              <PhotoCart key={item._id} item={item}></PhotoCart>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
