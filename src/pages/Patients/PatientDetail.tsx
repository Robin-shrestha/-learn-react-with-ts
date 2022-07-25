import React, { useEffect } from "react";
import {
  useLocation,
  useNavigate,
  useNavigationType,
  useParams,
  useSearchParams,
} from "react-router-dom";

// useLocation,useParams, useNavigate, useSearchParams, useNavigateTypes

export const PatientDetail = () => {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const [searchparams, setSearchParams] = useSearchParams();
  const navigateType = useNavigationType();
  console.log(
    "🚀 ~ file: PatientDetail.tsx ~ line 18 ~ PatientDetail ~ navigateType",
    navigateType
  );
  useEffect(() => {
    setSearchParams({
      key1: "value1",
      key2: "value2",
    });
    // setTimeout(() => {
    //   navigate(
    //     { pathname: "/patients" },
    //     {
    //       state: { name: "Bill" },
    //       // replace: true,
    //     }
    //   );
    // }, 5000);
  }, []);
  // console.log(
  //   "🚀 ~ file: PatientDetail.tsx ~ line 8 ~ PatientDetail ~ location",
  //   { location, params }
  // );

  return <div>PatientDetail</div>;
};
