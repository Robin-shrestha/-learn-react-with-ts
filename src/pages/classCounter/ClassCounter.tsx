import React, { Component } from "react";

interface State {
  count: number;
  count2: number;
}
interface Props {}

export class ClassCounter extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      count: 0,
      count2: 0,
    };
  }

  componentDidMount() {
    console.log("component mounted in class component");
    // some fxn
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (this.state.count !== prevState.count)
      console.log("component updated in class component", this.state.count);
  }

  componentWillUnmount() {
    console.log("component unmounted in class component");
  }

  render(): React.ReactNode {
    return (
      <div>
        <p>
          <span>class Count : {this.state.count}</span>
          <button
            onClick={() => {
              this.setState((curr) => ({
                ...curr,
                count: this.state.count + 1,
              }));
            }}
          >
            increase
          </button>
        </p>
        <p>
          <span>class Count 2: {this.state.count2}</span>
          <button
            onClick={() => {
              this.setState((curr) => ({
                ...curr,
                count2: this.state.count2 + 1,
              }));
            }}
          >
            increase count 2
          </button>
        </p>
      </div>
    );
  }
}
