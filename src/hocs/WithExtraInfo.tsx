import React, { useEffect, useState } from "react";

export function withExtraInfo<T>(Component: React.ComponentType<T>) {
  return (props: Omit<T, "importantData">) => {
    const [importantData, setImportantData] = useState("");
    useEffect(() => {
      //   some tasks to get the important data
      setImportantData("important data");
    }, []);
    return <Component {...(props as T)} importantData={importantData} />;
  };
}

// const add = (a: number) => {
//   return (b: number) => {
//     return a + b;
//   };
// };

// const add2 = add(2)
// add2(100)
