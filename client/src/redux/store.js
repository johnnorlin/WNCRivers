import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "./slices/pageSlice.js";

export const store = configureStore({
  reducer: {
    page: pageSlice,
  },
});
