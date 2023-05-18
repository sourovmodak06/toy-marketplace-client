import React from "react";
import useTitle from "../../shared/hooks/useTitle";

const Home = () => {
  useTitle('Home');
  return (
    <div>
      <h2>Home page</h2>
    </div>
  );
};

export default Home;
