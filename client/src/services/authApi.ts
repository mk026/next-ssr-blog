import { IUser } from "../models/IUser";
import { SigninFormValues } from "../validation/signinValidation";
import { SignupFormValues } from "../validation/signupValidation";
import { baseApi, HttpMethod } from "./baseApi";

interface AuthResponse {
  user: IUser;
  token: string;
}

export const SIGNUP_URL = "/signup";
export const SIGNIN_URL = "/signin";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation<AuthResponse, SignupFormValues>({
      query: (body) => ({ url: SIGNUP_URL, method: HttpMethod.POST, body }),
    }),
    signin: builder.mutation<AuthResponse, SigninFormValues>({
      query: (body) => ({ url: SIGNIN_URL, method: HttpMethod.POST, body }),
    }),
  }),
});

export const { useSigninMutation, useSignupMutation } = authApi;
