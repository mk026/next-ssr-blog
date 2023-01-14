import { baseApi, HttpMethod } from "./baseApi";
import { IUser } from "../../models/IUser";
import { config } from "../../config";

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

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation<AuthResponse, SignupDto>({
      query: (body) => ({
        url: config.signupUrl,
        method: HttpMethod.POST,
        body,
      }),
    }),
    signin: builder.mutation<AuthResponse, SigninDto>({
      query: (body) => ({
        url: config.signinUrl,
        method: HttpMethod.POST,
        body,
      }),
    }),
  }),
});

export const { useSigninMutation, useSignupMutation } = authApi;
