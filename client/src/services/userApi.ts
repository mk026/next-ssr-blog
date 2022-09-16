import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({ query: () => "/users" }),
  }),
});

export const { useGetUserQuery } = userApi;
