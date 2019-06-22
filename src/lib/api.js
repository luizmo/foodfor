import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "http://www.foodfor.tk:8080"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;