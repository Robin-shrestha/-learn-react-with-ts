import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const BasicLayout = () => {
  const Styling = (prop: { isActive: boolean }) => {
    const { isActive } = prop;
    return { color: isActive ? "red" : "blue" };
  };
  return (
    <div>
      <div style={{ display: "flex", gap: "15px" }}>
        <NavLink style={Styling} to={"/"} >
          Home
        </NavLink>
        <NavLink style={Styling} to={"/about"}>
          About
        </NavLink>
        <NavLink style={Styling} to={"/patients"}>
          Patients
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};
