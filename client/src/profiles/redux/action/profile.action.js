import { createAsyncThunk } from "@reduxjs/toolkit";
import { createProfile, getCurrentProfile } from "../../services/profile.service";



export const createProfileAction = createAsyncThunk(
  "profile/createProfileAction",
  async (formData, {rejectWithValue}) => {
    try{
      const response= await createProfile(formData);
      return {data:response.data,status:response.status};
    }catch(err){
      console.log(err)
      return rejectWithValue(err?.data || {message: 
        "Failed to create or update profile"
      });
    }
  }
);
export const getCurrentProfileAction = createAsyncThunk(
  "profile/getCurrentProfileAction",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getCurrentProfile();
      console.log("Profile response:", response);

      if (response.status === 200) {
        return { status: 200, data: response.data };
      }
    } catch (err) {
      const status = err?.status || err?.response?.status;

      if (status === 400) {
        return rejectWithValue({
          notfound: true,
          status: 400,
        });
      }

      return rejectWithValue(
        err?.data || { message: "Failed to load profile" }
      );
    }
  }
);
