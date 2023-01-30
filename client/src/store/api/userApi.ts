import { baseApi, HttpMethod } from "./baseApi";
import { config } from "../../config";
import { IUser, UpdatePasswordDto, UpdateUserDto } from "../../models/user";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<IUser, string>({
      query: (id) => ({ url: `${config.usersUrl}/${id}` }),
    }),
    updateUser: builder.mutation<IUser, UpdateUserDto>({
      query: (body) => ({ url: config.usersUrl, method: HttpMethod.PUT, body }),
    }),
    updatePassword: builder.mutation<void, UpdatePasswordDto>({
      query: (body) => ({
        url: config.passwordUpdateUrl,
        method: HttpMethod.PATCH,
        body,
      }),
    }),
    deleteUser: builder.mutation<void, string>({
      query: (id) => ({
        url: `${config.usersUrl}/${id}`,
        method: HttpMethod.DELETE,
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useUpdateUserMutation,
  useUpdatePasswordMutation,
} = userApi;
