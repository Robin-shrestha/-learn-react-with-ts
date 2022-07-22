import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { BaseLayout } from "./Layout";
import { Error } from "./pages/Error";
import { TeamsPages } from "./pages/teams";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<div>Home</div>} />
          <Route path="about" element={<div>about</div>} />
          <Route path="teams/*" element={<TeamsPages />} />
          {/* <TeamsPages /> */}
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

const Navbar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/teams">Teams</Link>
      </li>
    </ul>
  );
};
export default App;
