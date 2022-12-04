import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import axios from "../axios";

interface ProfileState {
  status: any;
  profile: {
    picture: string,
    username: string,
    occupation: string,
    location: string,
    description: string,
    links: Array<object>;
  };
}

const initialState: ProfileState = {
  status: null,
  profile: {
    picture: '',
    username: '',
    occupation: '',
    location: '',
    description: '',
    links: [],
  },
};

export const getUserProfile = createAsyncThunk(
  "getUserProfile",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get("/profile");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUserProfile.pending, (state) => {
        state.status = null;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.status = 200;
        state.profile = action.payload;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.status = action.payload;
      });
  },
});

export const stateProfile = (state: RootState) => state.profile;
