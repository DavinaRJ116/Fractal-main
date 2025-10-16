import { createAsyncThunk } from "@reduxjs/toolkit";
import { loadUser, loginUser, registerUser } from "../../services/auth.service";

// Load user
export const loadUserAction = createAsyncThunk(
  "auth/loadUserAction",
  async (_, { rejectWithValue }) => {
    try {
      const data = await loadUser();
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Login action
export const loginUserAction = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const data = await loginUser(userData);
      dispatch(loadUserAction()); // ✅ load user after login
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Register action
export const registerUserAction = createAsyncThunk(
  "auth/registerUser",
  async (formData, { rejectWithValue, dispatch }) => {
    try {
      const data = await registerUser(formData);
      dispatch(loadUserAction()); // ✅ load user after registration
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
