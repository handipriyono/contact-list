import { configureStore } from "@reduxjs/toolkit";
import personsReducer from "./personSlice";

export default configureStore({
  reducer: {
    persons: personsReducer,
  },
});
