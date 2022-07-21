import { CounterRes } from "../../types/counter";

export const fetchCounter = (): CounterRes => {
  // fetch api we fetch something
  return { counter: 12 };
};
