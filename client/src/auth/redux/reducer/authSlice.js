import { createSlice } from "@reduxjs/toolkit";
import { registerUserAction, loginUserAction, loadUserAction } from "../action/authAction";

const authState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
  token: localStorage.getItem("token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUserAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUserAction.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.token = action.payload?.data?.token; // ✅ optional chaining
        localStorage.setItem("token", action.payload?.data?.token);
      })
      .addCase(registerUserAction.rejected, (state, action) => { // ✅ add rejected handler
        state.loading = false;
        state.error = action.payload || "Registration failed";
      })
      .addCase(loginUserAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUserAction.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.token = action.payload?.data?.token; // ✅ optional chaining
        localStorage.setItem("token", action.payload?.data?.token);
      })
      .addCase(loginUserAction.rejected, (state, action) => { // ✅ add rejected handler
        state.loading = false;
        state.error = action.payload || "Login failed";
      })
      .addCase(loadUserAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadUserAction.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload?.data; // ✅ optional chaining
      })
      .addCase(loadUserAction.rejected, (state, action) => { // ✅ add rejected handler
        state.loading = false;
        state.error = action.payload || "Failed to load user";
      });
  },
  reducers: {},
});

export default authSlice.reducer;
