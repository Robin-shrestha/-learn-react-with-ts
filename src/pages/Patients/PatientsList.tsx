import React from "react";
import { useLocation } from "react-router-dom";

export const PatientsList = () => {
  const location = useLocation();
  console.log(
    "🚀 ~ file: PatientsList.tsx ~ line 6 ~ PatientsList ~ location",
    location
  );
  return <div>PatientsList</div>;
};
