import React from "react";
import { Link } from "react-router-dom";
import errorImg from '/images/error-page.png';

const ErrorPage = () => {
  return (
    <div>
        <div className="flex justify-center items-center">
        <img src={errorImg} alt="error img"/>
        </div>
      <h1 className="text-8xl font-black md:text-center capitalize md:uppercase">
        Oops! page not found
      </h1>
      <p className="md:text-center text-2xl md:text-4xl md:w-3/4 m-auto py-2 md:py-4">
        Sorry, the page you're looking for doesn't exist.If you think something
        broken, report a problem
      </p>
      <div className="flex justify-center items-center">
        <Link
          to={"/"}
          className="btn btn-info text-white md:w-2/12 m-auto w-4/5 my-10 hover:text-black"
        >
          Return home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
