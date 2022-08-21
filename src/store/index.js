import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./users/usersSlice";
const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
export default store;
