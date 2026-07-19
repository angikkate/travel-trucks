import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  limit: 4,
  location: "",
  form: "",
  engine: "",
  transmission: "",
};

const filtersSlice = createSlice({
  name: "filters",

  initialState,

  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },

    resetPage(state) {
      state.page = 1;
    },

    setLocation(state, action) {
      state.location = action.payload;
    },

    setForm(state, action) {
      state.form = action.payload;
    },

    setEngine(state, action) {
      state.engine = action.payload;
    },

    setTransmission(state, action) {
      state.transmission = action.payload;
    },

    resetFilters() {
      return initialState;
    },
  },
});

export const {
  setPage,
  resetPage,
  setLocation,
  setForm,
  setEngine,
  setTransmission,
  resetFilters,
} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;