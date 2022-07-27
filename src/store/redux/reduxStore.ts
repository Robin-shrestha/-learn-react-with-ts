import { legacy_createStore as createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { AuthReducer, counterReducer } from "./reducers";

export const reduxStore = createStore(
  // counterReducer,
  combineReducers({ counter: counterReducer, auth: AuthReducer }),
  composeWithDevTools()
);
