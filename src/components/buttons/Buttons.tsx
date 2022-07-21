import React from "react";

interface props {
  children: React.ReactElement | string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button: React.FC<props> = ({ children, onClick }) => {
  return (
    <button style={{ width: "150px", height: "25px" }} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
