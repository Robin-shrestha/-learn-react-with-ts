import React from "react";

interface props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
}

const NumberInputField: React.FC<props> = ({ onChange, value }) => {
  return <input value={value} type="number" onChange={onChange} />;
};

export default NumberInputField;
