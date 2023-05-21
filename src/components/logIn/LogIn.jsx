import React, { useContext } from "react";
import useTitle from "../shared/hooks/useTitle";
import login from "/images/login.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProviders";
import { ToastContainer, toast } from "react-toastify";




const LogIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  useTitle("LogIn");
  const {signIn,googleCreateUser} = useContext(AuthContext);

  const handleLogin = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email,password)
    .then(() => {
      toast.success("Successfully Login by Email");
      form.reset();
      navigate(from, {replace: true})
    })
    .catch(error => {
      toast.error(error.message);
    })
  }
  const handleGoogleSignIn = () => {
    googleCreateUser()
    .then(()=>{
      toast.success("Successfully Login by Google");
      navigate(from, {replace: true})
    })
    .catch(error => {
      toast.error(error.message);
    })
  }




  return (
    <div>
      <ToastContainer theme="colored" />
      <div className="flex flex-col-reverse md:flex-row items-center">
        <img src={login} alt="Login img" className="md:w-1/2" />
        <div className="bg-[#385a64] md:h-[90vh] w-full md:rounded-tl-full md:rounded-bl-full md:border-t-4 md:border-b-4 md:border-l-4 border-[#ffc600] py-8 md:py-0">
          <div className=" md:h-[90vh] flex flex-col justify-center">
            <div className="">
              <h2 className="text-center text-3xl font-bold text-white">
                Log In
              </h2>
              <form onSubmit={handleLogin}>
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
                <div className="flex justify-end mr-12 py-5 md:mr-16">
                  <input
                    type="submit"
                    value="Log In"
                    className="bg-[#ffc600] w-1/2 py-2 rounded-2xl uppercase font-semibold"
                  />
                </div>
                <p className="text-right mr-14 text-white md:mr-20">
                  Don't Have an Account?{" "}
                  <Link
                    to="/register"
                    className="underline underline-offset-4 text-[#ffc600]"
                  >
                    Register
                  </Link>
                </p>
                <div className="w-3/4 m-auto">
                  <div className="flex justify-between items-center">
                    <hr className="w-full"/>
                    <h2 className="text-xl mx-2 text-white">OR</h2>
                    <hr className="w-full"/>
                  </div>
                </div>
                <div className="flex justify-center">
                    <FaGoogle onClick={handleGoogleSignIn} className="bg-[#ffc600] text-5xl text-[#385a64] mt-4 p-2 border-2 rounded-full cursor-pointer"></FaGoogle>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
