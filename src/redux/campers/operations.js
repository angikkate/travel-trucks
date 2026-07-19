import { createAsyncThunk } from "@reduxjs/toolkit";
import campersApi from "../../api/campersApi";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (params = {}, thunkAPI) => {
    try {
      const queryParams = {
        page: params.page,
        limit: params.limit,
      };

      if (params.location) {
        queryParams.location = params.location;
      }

      if (params.form) {
        queryParams.form = params.form;
      }

      if (params.engine) {
        queryParams.engine = params.engine;
      }

      if (params.transmission) {
        queryParams.transmission = params.transmission;
      }

      const response = await campersApi.get("/campers", {
        params: queryParams,
      });

      return {
        ...response.data,
        page: params.page,
      };
    } catch (error) {
      if (error.response?.status === 404) {
        return {
          items: [],
          total: 0,
          page: params.page,
        };
      }

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchCamperById",
  async (id, thunkAPI) => {
    try {
      const response = await campersApi.get(`/campers/${id}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);