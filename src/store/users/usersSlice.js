import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./usersActions";

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [getUsers.fulfilled]: (state, { payload: { data } }) => {
      console.log(data);
      state.users = data;
    },
  },
});
export default usersSlice;
