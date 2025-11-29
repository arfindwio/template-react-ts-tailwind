import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI, registerAPI } from "./authAPI";
import { setCookie } from "../../utils/cookie";

import type { LoginPayload, RegisterPayload } from "./authTypes";

// LOGIN
export const login = createAsyncThunk(
  "auth/login",
  async (payload: LoginPayload, thunkAPI) => {
    try {
      const data = await loginAPI(payload);
      setCookie("token", data.token, 7);
      return data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message,
      );
    }
  },
);

// REGISTER
export const register = createAsyncThunk(
  "auth/register",
  async (payload: RegisterPayload, thunkAPI) => {
    try {
      const data = await registerAPI(payload);
      setCookie("token", data.token, 7);
      return data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message,
      );
    }
  },
);
