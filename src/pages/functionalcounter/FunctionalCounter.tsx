import React, { useState, useEffect, useRef } from "react";
import CounterChild from "./CounterChild";

// lifecycle methods
// hooks (useState, useEffect, useRef, useContext) only functions
// hocs

// forms

type Props = {};
export const FunctionCounter = (props: Props): JSX.Element => {
  const myRef = useRef<HTMLDivElement>(null);

  const [count, setCount] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  useEffect(() => {
    console.log("component mounted in function component");
    return () => {
      console.log("component unmounted in function component");
    };
  }, []);

  useEffect(() => {
    if (count > 0) console.log("component update in function component");
  }, [count]);

  return (
    <div ref={myRef}>
      <p>
        <span>
          function Count :{count}
          {/* {newRef.current} */}
        </span>
        <button
          onClick={() => {
            setCount((curr) => curr + 1);
            // newRef.current += 1;
          }}
        >
          increase count
        </button>
      </p>
      <p>
        <span>function Count 2 : {count2}</span>
        <button
          onClick={() => {
            setCount2((curr) => curr + 1);
          }}
        >
          increase count 2
        </button>
      </p>
      <CounterChild />
    </div>
  );
};
