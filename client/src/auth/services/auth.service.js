import API from "../../utils/api";

// load user details
export const loadUser = async () => {
  try {
    const token = localStorage.getItem("token"); // ✅ add token
    const config = token ? { headers: { "x-auth-token": token } } : {}; // ✅ send token in headers

    const response = await API.get("/auth", config); // ✅ pass config
    console.log(response);
    return { data: response.data, status: response.status }; // ✅ no localStorage set here
  } catch (error) {
    throw error; // ✅ throw error to handle in action
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await API.post("/auth", userData);
    console.log(response);
    localStorage.setItem("token", response.data.token); // ✅ store token on login
    return { data: response.data, status: response.status };
  } catch (error) {
    throw error; // ✅ throw error
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await API.post("/users", userData);
    console.log(response);
    localStorage.setItem("token", response.data.token); // ✅ store token on register
    return { data: response.data, status: response.status };
  } catch (error) {
    throw error; // ✅ throw error
  }
};
