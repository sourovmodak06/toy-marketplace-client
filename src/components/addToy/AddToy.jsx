import React, { useContext } from "react";
import useTitle from "../shared/hooks/useTitle";
import { AuthContext } from "../../providers/AuthProviders";
import { ToastContainer, toast } from "react-toastify";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const handleLogin = (e) => {
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

    const info = {
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
    console.log(info);

    fetch("http://localhost:5000/addToy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          form.reset();
          toast.success("Successfully Added Information");
        }
      });
  };
  useTitle("Add Toy");
  return (
    <div>
      <ToastContainer theme="colored" />
      <h2 className="text-center underline decoration-wavy decoration-yellow-300 underline-offset-4 pb-5 text-[#385a64] text-4xl font-semibold uppercase">
        Add A Toy
      </h2>
      <div className="bg-[#385a6410] py-10">
        <div className="md:w-3/4 m-auto">
          <form onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-2xl font-medium">
                  Picture URL
                </span>
              </label>
              <input
                type="url"
                name="toyUrl"
                placeholder="Picture URL"
                className="input input-bordered"
                required
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
                placeholder="Toy Name"
                className="input input-bordered"
                required
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
                  className="input input-bordered"
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
                  className="input input-bordered"
                  readOnly
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
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
                  className="input input-bordered"
                  readOnly
                />
              </div>
              <div className="form-control w-1/4">
                <label htmlFor="toy" className="label">
                  <span className="label-text text-2xl font-medium">
                    Select Category
                  </span>
                </label>
                <select name="toyCategory" className="input input-bordered">
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
                  placeholder="Price"
                  className="input input-bordered"
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
                  placeholder="Rating"
                  className="input input-bordered"
                  required
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
                  placeholder="Available Quantity"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <textarea
              name="description"
              className="textarea textarea-bordered w-full my-5"
              placeholder="Detail description"
              required
            ></textarea>
            <input type="submit" value="Add Info" className="btn w-full" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
