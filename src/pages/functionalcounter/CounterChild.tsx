import React, { useContext } from "react";
import { withExtraInfo } from "../../hocs";
import { someContext, ContextInterface } from "../../components/contexts";

interface Props {
  importantData: string;
}

const CounterChild = (props: Props): JSX.Element => {
  const { name, setName } = useContext(someContext) as ContextInterface;
  return (
    <div>
      {/* <p>CounterChild data from context : {name}</p> */}
      {/* <button
        onClick={() => {
          setName("jill");
        }}
      >
        change name
      </button> */}
      <p>hoc important data : {props.importantData}</p>

      <button onClick={() => setName("anna")}>change name</button>
    </div>
  );
};

export default withExtraInfo(CounterChild);
