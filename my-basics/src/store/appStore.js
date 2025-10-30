import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./slices/userSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default appStore;
