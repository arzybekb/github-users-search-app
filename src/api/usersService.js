import axiosInstance from "../config/axios-instanse";

export const getUsersService = () => {
  return axiosInstance.get("users");
};
export const searchUsersService = (requestParams) => {
  const params = {};
  if (requestParams.q) params.q = requestParams.q;
  return axiosInstance.get("search/users", { params });
};
