import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  //intial states should be what?
  initialState: {},
  reducers: {
    //dispatch(booleanSet(cloudInfo))
    setUser: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
