import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCampers,
  fetchCamperById,
} from "./operations";

const initialState = {
  items: [],
  camper: null,
  total: 0,
  loading: false,
  error: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.total = action.payload.total;

        if (action.payload.page === 1) {
          state.items = action.payload.items;
        } else {
          state.items.push(...action.payload.items);
        }
      })
      
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchCamperById.pending, state => {
        state.loading = true;
      })

      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.loading = false;

        state.camper = action.payload;
      })

      .addCase(fetchCamperById.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload;
      })
  },
});

export const campersReducer = campersSlice.reducer;