import { Action } from "../../../types/action";
import { INCREMENT, DECREMENT, TOGGLE } from "../actions";

const InitialState = {
  count: 0,
  showCount: false,
};

export const counterReducer = (
  state = InitialState,
  action: Action<number>
) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload };
    case DECREMENT:
      return { ...state, count: state.count - action.payload };
    case TOGGLE:
      return { ...state, showCount: !state.showCount };
    default:
      return state;
  }
};
