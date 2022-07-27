import { configureStore } from "@reduxjs/toolkit";
import { authSlice, counterSlice } from "./slice";

export const toolkitStore = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
