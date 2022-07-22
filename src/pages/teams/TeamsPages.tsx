import React from "react";
import { Route, Routes } from "react-router-dom";
import { Error } from "../Error";
import { AddTeam } from "./AddTeam";
import { LeagueStanding } from "./LeagueStanding";
import { Team } from "./Team";
import { Teams } from "./Teams";
import { TeamsLayout } from "./TeamsLayout";

export const TeamsPages = () => {
  return (
    <Routes>
      <Route path="" element={<TeamsLayout />}>
        <Route index element={<Teams />} />
        <Route path=":id" element={<Team />} />
        <Route path=":id/:id2/:id3" element={<Team />} />
        <Route path="add" element={<AddTeam />} />
        <Route path="standings" element={<LeagueStanding />} />

        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};
