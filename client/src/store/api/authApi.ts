import { IUser } from "../../models/IUser";
import { baseApi, HttpMethod } from "./baseApi";

export interface SignupDto {
  name: string;
  bio?: string;
  email: string;
  password: string;
}

export interface SigninDto {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: IUser;
  token: string;
}

export const SIGNUP_URL = "/api/signup";
export const SIGNIN_URL = "/api/signin";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation<AuthResponse, SignupDto>({
      query: (body) => ({ url: SIGNUP_URL, method: HttpMethod.POST, body }),
    }),
    signin: builder.mutation<AuthResponse, SigninDto>({
      query: (body) => ({ url: SIGNIN_URL, method: HttpMethod.POST, body }),
    }),
  }),
});

export const { useSigninMutation, useSignupMutation } = authApi;
