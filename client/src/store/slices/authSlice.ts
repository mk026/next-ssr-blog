import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  isAuth: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuth: false,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authStart(state) {
      state.error = null;
      state.isLoading = true;
    },
    authSuccess(state) {
      state.isLoading = true;
      state.isAuth = true;
    },
    authError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    setUnauth(state) {
      state.isAuth = false;
    },
  },
});
