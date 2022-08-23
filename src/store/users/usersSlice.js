import { createSlice } from "@reduxjs/toolkit";
import { getUsers, searchUsers } from "./usersActions";

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [getUsers.fulfilled]: (state, { payload: { data } }) => {
      state.users = data;
    },
    [searchUsers.fulfilled]: (
      state,
      {
        payload: {
          data: { items },
        },
      }
    ) => {
      state.users = items;
    },
  },
});
export default usersSlice;
