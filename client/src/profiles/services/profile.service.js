import API from "../../utils/api";

export const createProfile = async (formData) => {
  const response = await API.post("/profile", formData);
  return response; 
};

export const getCurrentProfile = async () => {
  const response = await API.get("/profile/me");
  return response; 
};

export const addExperience = async (formData) => {
  const response = await API.put("/profile/experience", formData);
  return response;
};

export const addEducation = async (formData) => {
  const response = await API.put("/profile/education", formData);
  return response;
};
