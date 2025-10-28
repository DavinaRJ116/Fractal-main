import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/redux/reducer/authSlice";
import profileReducer from "../profiles/redux/reducers/profileSlice"
import profilesReducer from "../profiles/redux/reducers/Profilesslice"
const store = configureStore({
  reducer: { auth: authReducer ,
    profile: profileReducer,
    profiles: profilesReducer,
  },
});

export default store;
