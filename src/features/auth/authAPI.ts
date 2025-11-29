import { api } from "../../utils/axios";

import type { LoginPayload, RegisterPayload } from "./authTypes";

// LOGIN
export const loginAPI = async (payload: LoginPayload) => {
  const response = await api.post("/auth/login", payload);
  return response.data;
};

// LOGOUT
export const logoutAPI = async () => {
  const response = await api.post("/auth/logout");
  return response.data;
};

// REGISTER
export const registerAPI = async (payload: RegisterPayload) => {
  const response = await api.post("/auth/register", payload);
  return response.data;
};
