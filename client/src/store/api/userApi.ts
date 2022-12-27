import { IUser } from "../../models/IUser";
import { baseApi, HttpMethod } from "./baseApi";

export const USERS_URL = "/users";
export const PASSWORD_UPDATE_URL = "/users/password";

export interface UpdateUserDto {
  name?: string;
  email?: string;
  avatarUrl?: string;
}

export interface UpdatePasswordDto {
  oldPassword: string;
  password: string;
  confirmPassword: string;
}

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<IUser, string>({
      query: (id) => ({ url: `${USERS_URL}/${id}` }),
    }),
    updateUser: builder.mutation<IUser, UpdateUserDto>({
      query: (body) => ({ url: USERS_URL, method: HttpMethod.PUT, body }),
    }),
    updatePassword: builder.mutation<void, UpdatePasswordDto>({
      query: (body) => ({
        url: PASSWORD_UPDATE_URL,
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
