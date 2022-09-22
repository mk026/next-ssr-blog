import { baseApi } from "./baseApi";

export const USERS_URL = "/users";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({ query: () => USERS_URL }),
  }),
});

export const { useGetUserQuery } = userApi;
