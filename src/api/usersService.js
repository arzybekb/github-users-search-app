import axiosInstance from "../config/axios-instanse";

export const getUsersService = () => {
  return axiosInstance.get("users");
};
