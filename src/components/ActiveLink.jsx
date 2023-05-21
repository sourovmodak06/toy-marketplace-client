import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({to, children}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "btn border-2 btn-outline" : "border-2 border-[#28f0d542] btn glass btn-info"}
    >
        {children}
    </NavLink>
  );
};

export default ActiveLink;