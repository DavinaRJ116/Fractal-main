import { createSlice } from "@reduxjs/toolkit";
import { getCurrentProfileAction } from "../action/profile.action";

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
      .addCase(getCurrentProfileAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCurrentProfileAction.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload?.data;
        state.error = null;
      })
      .addCase(getCurrentProfileAction.rejected, (state, action) => {
        console.log("❌ Profile load error:", action);
        state.loading = false;
        state.error = action.payload || "Error loading profile";
        state.profile = null;
      });
  },
});

export default profileSlice.reducer;
