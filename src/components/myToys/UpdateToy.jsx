import React, { useContext } from "react";
import useTitle from "../shared/hooks/useTitle";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthProviders";

const UpdateToy = () => {
  useTitle("Update Toy");
  const toyUpdate = useLoaderData();
  const {
    _id,
    toyUrl,
    toyName,
    price,
    toyCategory,
    rating,
    quantity,
    description,
  } = toyUpdate;

  const { user } = useContext(AuthContext);
  const handleUpdateInfo = (e) => {
    e.preventDefault();
    const form = e.target;
    const toyUrl = form.toyUrl.value;
    const toyName = form.toyName.value;
    const sellerName = form.sellerName.value;
    const sellerPhoto = form.sellerPhoto.value;
    const email = form.email.value;
    const toyCategory = form.toyCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const updateInfo = {
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
    };
    console.log(updateInfo);

    fetch(`http://localhost:5000/addToy/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Successfully Update Information");
        }
      });
  };
  return (
    <div>
      <ToastContainer theme="colored" />
      <h2 className="text-center underline decoration-wavy decoration-yellow-300 underline-offset-4 pb-5 text-[#385a64] text-4xl font-semibold uppercase">
        Update A Toy : {toyName}
      </h2>
      <div className="bg-[#385a6410] py-10">
        <div className="md:w-3/4 m-auto">
          <form onSubmit={handleUpdateInfo}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-2xl font-medium">
                  Picture URL
                </span>
              </label>
              <input
                type="url"
                name="toyUrl"
                defaultValue={toyUrl}
                className="input input-bordered border-yellow-500"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-2xl font-medium">
                  Toy Name
                </span>
              </label>
              <input
                type="text"
                name="toyName"
                defaultValue={toyName}
                className="input input-bordered border-yellow-500"
                readOnly
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-2xl font-medium">
                    Seller Name
                  </span>
                </label>
                <input
                  type="text"
                  name="sellerName"
                  value={user.displayName}
                  className="input input-bordered border-yellow-500"
                  readOnly
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-2xl font-medium">
                    Seller Photo
                  </span>
                </label>
                <input
                  type="url"
                  name="sellerPhoto"
                  value={user.photoURL}
                  className="input input-bordered border-yellow-500"
                  readOnly
                />
              </div>
            </div>
            <div className="flex flex-row-reverse items-center gap-4">
              <div className="form-control w-3/4">
                <label className="label">
                  <span className="label-text text-2xl font-medium">
                    Seller Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  className="input input-bordered border-yellow-500"
                  readOnly
                />
              </div>
              <div className="form-control w-1/4">
                <label htmlFor="toy" className="label">
                  <span className="label-text text-2xl font-medium">
                    Select Category
                  </span>
                </label>
                <select name="toyCategory" className="input input-bordered border-green-500" defaultValue={toyCategory}>
                  <option value="marvel">Marvel</option>
                  <option value="star-wars">Star Wars</option>
                  <option value="transformers">Transformers</option>
                  <option value="dc">DC</option>
                </select>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-2xl font-medium">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  defaultValue={price}
                  className="input input-bordered border-green-500"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-2xl font-medium">
                    Rating
                  </span>
                </label>
                <input
                  type="number"
                  name="rating"
                  defaultValue={rating}
                  className="input input-bordered border-yellow-500"
                  readOnly
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-2xl font-medium">
                    Available Quantity
                  </span>
                </label>
                <input
                  type="number"
                  name="quantity"
                  defaultValue={quantity}
                  className="input input-bordered border-green-500"
                  required
                />
              </div>
            </div>
            <textarea
              name="description"
              className="textarea textarea-bordered w-full my-5 border-green-500"
              defaultValue={description}
              required
            ></textarea>
            <input type="submit" value="Update Info" className="btn w-full" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateToy;
