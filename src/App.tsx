import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BasicLayout } from "./layout/BasicLayout";
import { AddPatients, PatientDetail, PatientsList } from "./pages/Patients";

// useLocation,useParams, useNavigate, useSearchParams, useNavigateTypes
export const myContext = React.createContext<any>({});
function App() {
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

export default App;
