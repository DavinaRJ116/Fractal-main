import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/redux/reducer/authSlice";
import profileReducer from "../profiles/redux/reducers/profileSlice"
const store = configureStore({
  reducer: { auth: authReducer ,
    profile: profileReducer
  },
});

export default store;
