import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsersService } from "../../api/usersService";
export const getUsers = createAsyncThunk(
  "usersSlice/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const users = getUsersService();
      return users;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
