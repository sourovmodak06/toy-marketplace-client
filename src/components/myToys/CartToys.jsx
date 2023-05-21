import React from "react";
import { FaPenSquare, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CartToys = ({ toy, myToysInfo, setMyToysInfo }) => {
  const {
    _id,
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

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/toy/${_id}`,{
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your Toy has been deleted.',
                'success'
              )
              const remaining = myToysInfo.filter(i => i._id !== _id);
              setMyToysInfo(remaining);
            }
          });
      }
    });
  };

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
        <td>
          <div>
            {description.length > 1000 ? (
              <h2>{description}</h2>
            ) : (
              <h2>{description.slice(0, 10)}...</h2>
            )}
          </div>
        </td>
        <td>
          <Link to={`/updateToy/${_id}`}>
          <FaPenSquare className="text-3xl cursor-pointer"></FaPenSquare>
          </Link>
          <FaRegTrashAlt
            className="text-3xl text-red-500 mt-3 cursor-pointer"
            onClick={() => handleDelete(_id)}
          ></FaRegTrashAlt>
        </td>
      </tr>
    </>
  );
};

export default CartToys;
