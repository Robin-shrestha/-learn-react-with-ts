import React from "react";
import { Outlet } from "react-router-dom";

export const TeamsLayout = () => {
  return (
    <div>
      TeamsLayout
      <Outlet
        context={{
          id: "id",
          name: "name",
        }}
      />
    </div>
  );
};
