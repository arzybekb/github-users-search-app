import axios from "axios";
import { baseURL } from "../utils/constants/general.js";

const headers = { "Content-Type": "application/json" };

const axiosInstance = axios.create({ baseURL, headers });

axiosInstance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
