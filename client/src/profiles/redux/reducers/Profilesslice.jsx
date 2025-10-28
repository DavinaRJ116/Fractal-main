import { createSlice } from "@reduxjs/toolkit";
import { getAllProfilesAction, getProfileByIdAction } from "../action/Profilesaction";

const initialState = {
  profiles: [],
  profile: null,
  loading: false,
  error: null,
};

const profilesSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get all profiles
      .addCase(getAllProfilesAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProfilesAction.fulfilled, (state, action) => {
        state.loading = false;
        state.profiles = action.payload;
      })
      .addCase(getAllProfilesAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Get single profile by ID
      .addCase(getProfileByIdAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProfileByIdAction.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(getProfileByIdAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default profilesSlice.reducer;
