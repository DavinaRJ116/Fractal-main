import API from "../../utils/api";

// Create or update profile
export const createProfile = async (formData) => {
  try {
    // If editing, you might want to use PUT instead of POST
    //const method = edit ? "put" : "post";

    const response = await API.post("/profile", formData);

    console.log("✅ Profile created/updated:", response.data);

    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    // Log exact backend response for debugging
    console.error("❌ Profile creation error:", error);

    // Throw error so redux thunk can catch it
    throw {
      data: error.response?.data || { message: "Failed to create/update profile" },
      status: error.response?.status || 500,
    };
  }
};

// Fetch current logged-in user's profile
export const getCurrentProfile = async () => {
  try {
    const response = await API.get("/profile/me");

    console.log("Profile fetched:", response.data);

    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    console.error("Profile fetch error:", error.response?.data);

    throw {
      data: error.response?.data || { message: "Failed to fetch profile" },
      status: error.response?.status || 500,
    };
  }
};
