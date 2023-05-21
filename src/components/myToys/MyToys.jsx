import React, { useContext, useEffect, useState } from "react";
import useTitle from "../shared/hooks/useTitle";
import { AuthContext } from "../../providers/AuthProviders";
import CartToys from "./CartToys";

const MyToys = () => {
  useTitle("My Toy");
  const [toys, setToys] = useState([]);
  const { user } = useContext(AuthContext);
  const name = user.displayName;

  const [myToysInfo, setMyToysInfo] = useState(toys)

  useEffect(() => {
    fetch(`https://superherotoystore-server-side.vercel.app/toy/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Seller Info</th>
              <th>Toy Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Quantity</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <CartToys key={toy._id} toy={toy} myToysInfo={myToysInfo} setMyToysInfo={setMyToysInfo}></CartToys>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
