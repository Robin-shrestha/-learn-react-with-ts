import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SomeContextProvider } from "./components/contexts";
import { useWindowDimension } from "./hooks";
import { BasicLayout } from "./layout/BasicLayout";
import { ClassCounter, FunctionCounter } from "./pages";
import { AddPatients, PatientDetail, PatientsList } from "./pages/Patients";

// useLocation,useParams, useNavigate, useSearchParams, useNavigateTypes
export const myContext = React.createContext<any>({});
function App() {
  // const { height, width } = useWindowDimension();
  // console.log({ width, height });
  // const [showclassComp, setShowclassComp] = useState(true);
  // const [showFunctionComp, setShowFunctionComp] = useState(true);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BasicLayout />}>
            <Route index element={<div>home</div>} />
            <Route path="about" element={<div>about</div>} />
            <Route path="patients" element={<PatientsList />} />
            <Route path="patients/:id" element={<PatientDetail />} />
            <Route path="patients/:id1/:id2/:id3" element={<PatientDetail />} />
            <Route path="patients/add" element={<AddPatients />} />
          </Route>
          <Route path="login" element={<div>Login</div>} />
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
const Navbar = () => {
  const Styling = (prop: { isActive: boolean }) => {
    const { isActive } = prop;
    return { color: isActive ? "red" : "blue" };
  };
  return (
    <div style={{ display: "flex", gap: "15px" }}>
      <NavLink style={Styling} to={"/"}>
        Home
      </NavLink>
      <NavLink style={Styling} to={"/about"}>
        About
      </NavLink>
      <NavLink style={Styling} to={"/patients"}>
        Patients
      </NavLink>
    </div>
  );
};

export default App;
