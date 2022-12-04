import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import axios from "../axios";

export const getPersonas = createAsyncThunk(
  "getAllPersona",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get("/personas");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const personaSlice = createSlice({
  name: "persona",
  initialState: {
    status: null,
    personas: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPersonas.pending, (state) => {
        state.status = null;
      })
      .addCase(getPersonas.fulfilled, (state, action) => {
        state.status = 200;
        const { payload } = action;
        const shuffled = payload.sort((a, b) => Math.random() - 0.5);
        state.personas = shuffled;
      })
      .addCase(getPersonas.rejected, (state, action) => {
        state.status = action.payload;
      });
  },
});

export const statePersonas = (state: RootState) => state.persona;
