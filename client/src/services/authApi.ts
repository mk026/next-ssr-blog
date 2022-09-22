import { IUser } from "../models/IUser";
import { SigninFormValues } from "../validation/signinValidation";
import { SignupFormValues } from "../validation/signupValidation";
import { baseApi } from "./baseApi";

interface AuthResponse {
  user: IUser;
  token: string;
}

export const SIGNUP_URL = "/signup";
export const SIGNIN_URL = "/signin";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation<AuthResponse, SignupFormValues>({
      query: () => SIGNUP_URL,
    }),
    signin: builder.mutation<AuthResponse, SigninFormValues>({
      query: () => SIGNIN_URL,
    }),
  }),
});

export const { useSigninMutation, useSignupMutation } = authApi;
