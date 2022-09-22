import { baseApi } from "./baseApi";

export const USERS_URL = "/users";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({ query: () => USERS_URL }),
    updateUser: builder.mutation({
      query: (body) => ({ url: USERS_URL, method: "PUT", body }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({ url: `${USERS_URL}/${id}`, method: "DELETE" }),
    }),
  }),
});

export const { useGetUserQuery } = userApi;
