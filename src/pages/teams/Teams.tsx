import React from "react";
import { Link, useMatch, useLocation } from "react-router-dom";

const teams = ["Chelsea", "ManUtd", "ManCity", "Arsenal", "Liverpool"];
export const Teams = (): JSX.Element => {
  const location = useLocation();
  const match = useMatch(location.pathname);
  console.log("🚀 ~ file: Teams.tsx ~ line 8 ~ match", match);

  return (
    <div>
      <div style={{ display: "flex", gap: "24px" }}>
        <Link to="/teams/add">Add</Link>
        <Link to="/teams/standings">Standings</Link>
      </div>
      Teams List page
      {teams.map((item) => (
        <div key={item}>
          <Link
            to={{
              pathname: `${item}`,
              search: "team=chelsea&playerid=90",
            }}
            state={{ id: "id" }}
          >
            {item}
          </Link>
        </div>
      ))}
    </div>
  );
};
