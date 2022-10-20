import { IUser } from "../models/IUser";
import { UpdatePasswordFormValues } from "../validation/updatePasswordValidation";
import { baseApi, HttpMethod } from "./baseApi";

export const USERS_URL = "/users";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<IUser, string>({
      query: (id) => ({ url: `${USERS_URL}/${id}` }),
    }),
    updateUser: builder.mutation<IUser, Partial<IUser>>({
      query: (body) => ({ url: USERS_URL, method: HttpMethod.PUT, body }),
    }),
    updatePassword: builder.mutation<void, UpdatePasswordFormValues>({
      query: (body) => ({
        url: `${USERS_URL}/update_password`,
        method: HttpMethod.PATCH,
        body,
      }),
    }),
    deleteUser: builder.mutation<void, string>({
      query: (id) => ({ url: `${USERS_URL}/${id}`, method: HttpMethod.DELETE }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useUpdateUserMutation,
  useUpdatePasswordMutation,
} = userApi;
