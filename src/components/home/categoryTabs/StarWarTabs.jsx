import React, { useContext, useEffect, useState } from "react";
import Cart from "./Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "./Modal";
import { AuthContext } from "../../../providers/AuthProviders";

const StarWarTabs = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [modalInfo, setModalInfo] = useState([]);

  useEffect(() => {
    fetch("https://superherotoystore-server-side.vercel.app/starWarCategory")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleClick = (_id) => {
    const productInfo = products.find((item) => item._id === _id);

    if (!user) {
      toast.error("You have to log in first to view details");
      return;
    }
    return setModalInfo(productInfo);
  };
  return (
    <div>
      <ToastContainer theme="colored" />
      <div>{user && <Modal modalInfo={modalInfo}></Modal>}</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10">
        {products.map((product) => (
          <Cart
            key={product._id}
            product={product}
            handleClick={handleClick}
          ></Cart>
        ))}
      </div>
    </div>
  );
};

export default StarWarTabs;
