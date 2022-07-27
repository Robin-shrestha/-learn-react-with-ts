import { Action } from "../../../types/action";
import { LOGIN, LOGOUT } from "../actions";

export const AuthReducer = (
  state = { isAuthenticated: false },
  action: Action<boolean>
) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isAuthenticated: true };
    case LOGOUT:
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};
