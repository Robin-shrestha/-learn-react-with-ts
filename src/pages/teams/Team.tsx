import React, { useEffect } from "react";
import {
  useLocation,
  useMatch,
  useNavigate,
  useNavigationType,
  useOutletContext,
  useParams,
  useResolvedPath,
  Location,
  useSearchParams,
} from "react-router-dom";
export const Team = (props: any) => {
  const match = useMatch("/teams/:uri");
  const location: Location = useLocation();
  const navigate = useNavigate();
  const naviProps = useNavigationType();
  const params = useParams();
  const outletContext = useOutletContext();
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // setSearchParams({ ...searchParams, key: "value", key2: "value" });
    // searchParams.forEach((V, K, P) => {
    //   console.log(V, K, P);
    // });
  }, []);
  console.log("n", {
    match,
    location,
    naviProps,
    params,
    searchParams: searchParams.toString(),
    outletContext,
  });

  return (
    <div>
      Team {params.id}
      <div>
        <button
          onClick={() => {
            navigate("/teams");
          }}
        >
          go to home
        </button>
      </div>
    </div>
  );
};
