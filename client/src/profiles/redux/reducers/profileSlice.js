import { createSlice } from "@reduxjs/toolkit";
import { createProfileAction, getCurrentProfileAction } from "../action/profile.action";

const initialState = {
  profile: null,
  profiles: [],
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
        state.error = null;
      })
      .addCase(createProfileAction.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
        state.error = null;
      })
      .addCase(createProfileAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error creating profile";
      })

      // Get Current Profile
      .addCase(getCurrentProfileAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCurrentProfileAction.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload?.data || null;
        state.error = null;
      })
      .addCase(getCurrentProfileAction.rejected, (state, action) => {
        state.loading = false;
        // If profile doesn't exist yet, it's not an actual error
        if (
          action.payload?.status === 400 &&
          action.payload?.data?.msg === "There is no profile for this user"
        ) {
          state.profile = null;
          state.error = null;
        } else {
          state.profile = null;
          state.error = action.payload || "Error loading profile";
        }
      });
  },
});

export default profileSlice.reducer;
