import { baseApi } from "./baseApi";

export const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({ query: () => "/posts" }),
    addPost: builder.mutation({
      query: (body) => ({ url: "/posts", method: "POST", body }),
    }),
    updatePost: builder.mutation({
      query: (body) => ({ url: "/posts", method: "PUT", body }),
    }),
  }),
});

export const { useGetPostsQuery, useAddPostMutation, useUpdatePostMutation } =
  postApi;
