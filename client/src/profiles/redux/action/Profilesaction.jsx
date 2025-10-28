// src/developers/redux/action/Profilesaction.jsx
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProfileById, getProfiles } from "../../services/profiles.service";

export const getAllProfilesAction = createAsyncThunk(
  "profiles/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getProfiles();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const getProfileByIdAction = createAsyncThunk(
  "profiles/getById",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await getProfileById(userId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

