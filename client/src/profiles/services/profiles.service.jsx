// src/developers/service/Profiles.service.js
import axios from "axios";
import API from "../../utils/api";


const API_URL = "/api/profile"; // Make sure your backend route matches this

// Get all profiles
export const getProfiles = async () => {
  return await axios.get(`${API_URL}`);
};

// Get profile by user ID
export const getProfileById = async (userId) => {
  const response = await API.get(`/profile/user/${userId}`);
  return response;
};


// Get current user’s profile
export const getCurrentProfile = async () => {
  return await axios.get(`${API_URL}/me`);
};
