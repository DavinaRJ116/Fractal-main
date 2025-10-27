import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createProfile,
  getCurrentProfile,
  addExperience,
  addEducation,
} from "../../services/profile.service";

// Create or Update Profile
export const createProfileAction = createAsyncThunk(
  "profile/createProfileAction",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await createProfile(formData);
      return response.data; // ✅ Return only data
    } catch (err) {
      return rejectWithValue(
        err?.response?.data || { message: "Failed to create or update profile" }
      );
    }
  }
);

// Get Current Profile
export const getCurrentProfileAction = createAsyncThunk(
  "profile/getCurrentProfileAction",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getCurrentProfile();
      return response.data; // ✅ Return only data
    } catch (err) {
      return rejectWithValue(
        err?.response?.data || { message: "Failed to load profile" }
      );
    }
  }
);

// Add Experience
export const addExperienceAction = createAsyncThunk(
  "profile/addExperienceAction",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await addExperience(formData);
      return response.data; // ✅ Return only data
    } catch (err) {
      return rejectWithValue(
        err?.response?.data || { message: "Failed to add experience" }
      );
    }
  }
);

// Add Education
export const addEducationAction = createAsyncThunk(
  "profile/addEducationAction",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await addEducation(formData);
      return response.data; // ✅ Return only data
    } catch (err) {
      return rejectWithValue(
        err?.response?.data || { message: "Failed to add education" }
      );
    }
  }
);
