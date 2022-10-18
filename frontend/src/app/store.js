import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import counterReducer from "../features/products/counterSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
  },
});
