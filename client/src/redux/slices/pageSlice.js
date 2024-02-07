import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  //intial states should be what?
  initialState: {
    page: null,
    bug: null,
  },
  reducers: {
    //dispatch(booleanSet(cloudInfo))
    setPage: (state, action) => {
      if (state.page === action.payload) {
        state.page = null;
      } else state.page = action.payload;
    },
    setBug: (state, action) => {
      if (state.bug === action.payload) {
        state.bug = null;
      } else state.bug = action.payload;
    },
  },
});

export const { setPage, setBug } = pageSlice.actions;

export default pageSlice.reducer;
