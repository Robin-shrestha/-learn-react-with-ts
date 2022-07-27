import { Action } from "./../../../types/action";

export const INCREMENT = "increment";
export const DECREMENT = "decrement";
export const TOGGLE = "toggle";

export const increaseCount = (count: number): Action<number> => {
  return { type: INCREMENT, payload: count };
};

export const decreaseCount = (count: number): Action<number> => {
  return { type: DECREMENT, payload: count };
};

export const toggleCounter = () => {
  return { type: TOGGLE };
};
