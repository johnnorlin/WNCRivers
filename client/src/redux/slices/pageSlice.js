import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  //intial states should be what?
  initialState: {
    page: null,
  },
  reducers: {
    //dispatch(booleanSet(cloudInfo))
    setPage: (state, action) => {
      if (state.page === action.payload) {
        state.page = null;
      } else state.page = action.payload;
    },
  },
});

export const { setPage } = pageSlice.actions;

export default pageSlice.reducer;
