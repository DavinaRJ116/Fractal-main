import { createSlice } from "@reduxjs/toolkit";
import {
  createProfileAction,
  getCurrentProfileAction,
  addExperienceAction,
  addEducationAction,
} from "../action/profile.action";

const initialState = {
  profile: null,
  loading: false,
  error: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Create Profile
      .addCase(createProfileAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProfileAction.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload; // ✅ store plain object
      })
      .addCase(createProfileAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Get Profile
      .addCase(getCurrentProfileAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCurrentProfileAction.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload; // ✅ store plain object
      })
      .addCase(getCurrentProfileAction.rejected, (state, action) => {
        state.loading = false;
        state.profile = null;
        state.error = action.payload;
      })

      // Add Experience
      .addCase(addExperienceAction.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload; // ✅ profile object updated
      })

      // Add Education
      .addCase(addEducationAction.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload; // ✅ profile object updated
      });
  },
});

export default profileSlice.reducer;
