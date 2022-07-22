import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div>
      <h1>404 </h1>
      <h1>page Not Found </h1>
      <Link to={"/"}>Back to home</Link>
    </div>
  );
};
