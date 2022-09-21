import { IUser } from "../models/IUser";
import { SigninFormValues } from "../validation/signinValidation";
import { SignupFormValues } from "../validation/signupValidation";
import { baseApi } from "./baseApi";

interface AuthResponse {
  user: IUser;
  token: string;
}

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signin: builder.mutation<AuthResponse, SigninFormValues>({
      query: () => "/signin",
    }),
    signup: builder.mutation<AuthResponse, SignupFormValues>({
      query: () => "/signup",
    }),
  }),
});

export const { useSigninMutation, useSignupMutation } = authApi;
