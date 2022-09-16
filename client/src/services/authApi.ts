import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signin: builder.query({ query: () => "/signin" }),
    signup: builder.query({ query: () => "/signup" }),
  }),
});

export const { useSigninQuery, useSignupQuery } = authApi;
