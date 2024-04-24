import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    setFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setFilter } = slice.actions;

export const selectNameFilter = (state) => state.filters.name;

export default slice.reducer;

