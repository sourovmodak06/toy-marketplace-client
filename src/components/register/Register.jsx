import React from 'react';
import useTitle from '../shared/hooks/useTitle';
import { Link } from 'react-router-dom';
import register from '/images/register.jpg';

const Register = () => {
    useTitle('Register');
    return (
        <div>
      <div className="flex flex-col-reverse md:flex-row items-center">
        <img src={register} alt="Login img" className="md:w-1/2" />
        <div className="bg-[#385a64] md:h-[100vh] w-full md:rounded-tl-full md:rounded-bl-full md:border-t-4 md:border-b-4 md:border-l-4 border-[#ffc600] py-8 md:pl-10 md:py-0">
          <div className=" md:h-[100vh] flex flex-col justify-center">
            <div className="">
              <h2 className="text-center text-3xl font-bold text-white">
              Register
              </h2>
              <form>
                <div className="form-control">
                  <label className="label ml-10 md:ml-16">
                    <span className="label-text text-white text-xl md:text-2xl font-light">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered w-4/5 m-auto"
                  />
                </div>
                <div className="form-control">
                  <label className="label ml-10 md:ml-16">
                    <span className="label-text text-white text-xl md:text-2xl font-light">
                      Email
                    </span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered w-4/5 m-auto"
                  />
                </div>
                <div className="form-control">
                  <label className="label ml-10 md:ml-16">
                    <span className="label-text text-white text-xl md:text-2xl font-light">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input input-bordered w-4/5 m-auto"
                  />
                </div>
                <div className="form-control">
                  <label className="label ml-10 md:ml-16">
                    <span className="label-text text-white text-xl md:text-2xl font-light">
                    Photo URL
                    </span>
                  </label>
                  <input
                    type="url"
                    name="photo"
                    placeholder="Photo URL"
                    className="input input-bordered w-4/5 m-auto"
                  />
                </div>
                <div className="flex justify-end mr-12 py-5 md:mr-16">
                  <input
                    type="submit"
                    value="Register"
                    className="bg-[#ffc600] w-1/2 py-2 rounded-2xl uppercase font-semibold"
                  />
                </div>
                <p className="text-right mr-14 text-white md:mr-20">
                Already have an account?{" "}
                  <Link
                    to="/login"
                    className="underline underline-offset-4 text-[#ffc600]"
                  >
                    LogIn
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;