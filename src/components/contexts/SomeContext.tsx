import React, { useState } from "react";

export interface ContextInterface {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

interface Props {
  children: JSX.Element;
}
export const someContext = React.createContext<ContextInterface | null>(null);

//     o------------------(store)
//   /   \                    :
// 0       0                  :
// /\      /\                 :
// 0 0     0 0                :
// /                          :
// 0--------------------------:
export const SomeContextProvider = (props: Props) => {
  const { children } = props;
  const [name, setName] = useState<string>("Jack");
  const contextValue = {
    name,
    setName,
  };
  return (
    <someContext.Provider value={contextValue}>{children}</someContext.Provider>
  );
};
