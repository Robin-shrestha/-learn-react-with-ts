import React, { useState } from "react";
import { SomeContextProvider } from "./components/contexts";
import { ClassCounter, FunctionCounter } from "./pages";

export const myContext = React.createContext<any>({});
function App() {
  const [showclassComp, setShowclassComp] = useState(true);
  const [showFunctionComp, setShowFunctionComp] = useState(true);

  return (
    <SomeContextProvider>
      <div>
        <div style={{ padding: 25 }}>
          {showclassComp && <ClassCounter />}

          <div>
            <button
              onClick={() => {
                setShowclassComp((curr) => !curr);
              }}
            >
              toggle class comp
            </button>
          </div>
        </div>
        <div style={{ padding: 25 }}>
          {showFunctionComp && <FunctionCounter />}

          <div>
            <button
              onClick={() => {
                setShowFunctionComp((curr) => !curr);
              }}
            >
              toggle function comp
            </button>
          </div>
        </div>
      </div>
    </SomeContextProvider>
  );
}

export default App;
