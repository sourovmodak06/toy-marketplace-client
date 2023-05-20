import React from "react";
import useTitle from "../shared/hooks/useTitle";
import { useLoaderData } from "react-router-dom";
import TableInfo from "./TableInfo";

const AllToys = () => {
  useTitle("All Toy");
  const toys = useLoaderData();
  return (
    <div className="px-10">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <TableInfo key={toy._id} toy={toy} ></TableInfo>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
