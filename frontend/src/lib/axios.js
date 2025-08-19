import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://newd-7.onrender.com/api", 
  withCredentials: true,
});
