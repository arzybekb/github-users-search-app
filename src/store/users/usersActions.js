import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsersService, searchUsersService } from "../../api/usersService";
export const getUsers = createAsyncThunk(
  "usersSlice/getUsers",
  async (option, { rejectWithValue }) => {
    try {
      const users = getUsersService();
      return users;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const searchUsers = createAsyncThunk(
  "usersSlice/searchUsers",
  async ({ option }, { rejectWithValue }) => {
    try {
      const users = searchUsersService(option);
      return users;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
