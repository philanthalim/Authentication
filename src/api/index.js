import Axios from "axios";

const API = Axios.create({ baseURL: "http://localhost:3001" });

API.interceptors.response.use(
  (response) => response,
  (error) => {
    throw error;
  }
);
export const signIn = (formData) => API.post("/user/sign-in", formData);
export const signUp = (formData) => API.post("/user/sign-up", formData);
