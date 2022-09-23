import { IUser } from "../models/IUser";
import { baseApi } from "./baseApi";

export const USERS_URL = "/users";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<IUser, string>({
      query: (id) => ({ url: `${USERS_URL}/${id}` }),
    }),
    updateUser: builder.mutation<IUser, Partial<IUser>>({
      query: (body) => ({ url: USERS_URL, method: "PUT", body }),
    }),
    deleteUser: builder.mutation<void, string>({
      query: (id) => ({ url: `${USERS_URL}/${id}`, method: "DELETE" }),
    }),
  }),
});

export const { useGetUserQuery } = userApi;
