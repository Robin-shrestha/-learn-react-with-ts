import React from "react";
import { Outlet } from "react-router-dom";
import { StyledNavbar } from "./NavBar";

export const BaseLayout = () => {
  return (
    <div>
      <StyledNavbar />
      <Outlet />
    </div>
  );
};
