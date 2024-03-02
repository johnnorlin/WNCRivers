import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  //intial states should be what?
  initialState: {
    page: null,
    bug: {},
    bugs: [],
    debris: [],
    success: [],
  },
  reducers: {
    //dispatch(booleanSet(cloudInfo))
    setPage: (state, action) => {
      if (state.page === action.payload) {
        state.page = null;
      } else state.page = action.payload;
    },
    setBug: (state, action) => {
      state.bug = action.payload;
    },
    setBugs: (state, action) => {
      state.bugs = [...action.payload];
    },
    setDebris: (state, action) => {
      state.debris = [...action.payload];
    },
    setSuccess: (state, action) => {
      state.success = [...state.success, ...action.payload];
    },
  },
});

export const { setPage, setBug, setBugs, setDebris, setSuccess } =
  pageSlice.actions;

export default pageSlice.reducer;
