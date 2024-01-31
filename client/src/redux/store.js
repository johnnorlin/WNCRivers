import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice.js";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
