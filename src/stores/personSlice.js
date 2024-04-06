import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_GATEWAY } from "../commons/constants";

export const fetchPersons = createAsyncThunk(
  "persons/fetchPersons",
  async () => {
    const response = await fetch(`${API_GATEWAY}/contact`);
    const data = await response.json();
    return data;
  }
);

//initial state
const initialState = {
  entities: [],
  loading: "idle",
};

const personsSlice = createSlice({
  name: "persons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPersons.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(fetchPersons.fulfilled, (state, action) => {
        state.loading = "idle";
        state.entities = action.payload;
      });
  },
});

export default personsSlice.reducer;
