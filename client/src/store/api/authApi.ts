import { baseApi, HttpMethod } from "./baseApi";
import { AuthResponse, SigninDto, SignupDto } from "../../models/auth";
import { config } from "../../config";

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
