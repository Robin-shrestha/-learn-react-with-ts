import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const TeamsLayout = () => {
  return (
    <div>
      TeamsLayout
      <div style={{ display: "flex", gap: "24px" }}>
        <Link to="/teams/add">Add</Link>
        <Link to="standings">Standings</Link>
      </div>
      <Outlet
        context={{
          id: "id",
          name: "name",
        }}
      />
    </div>
  );
};
