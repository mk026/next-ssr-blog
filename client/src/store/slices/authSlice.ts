import { createSlice } from "@reduxjs/toolkit";

import { IUser } from "../../models/IUser";
import { authApi } from "../api/authApi";

export interface AuthState {
  isAuth: boolean;
  user: IUser | null;
  token: string | null;
}

const initialState: AuthState = {
  isAuth: false,
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signout(state) {
      state.isAuth = false;
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.signin.matchFulfilled,
      (state, { payload }) => {
        state.isAuth = true;
        state.user = payload.user;
        state.token = payload.token;
      }
    );
    builder.addMatcher(
      authApi.endpoints.signup.matchFulfilled,
      (state, { payload }) => {
        state.isAuth = true;
        state.user = payload.user;
        state.token = payload.token;
      }
    );
  },
});
