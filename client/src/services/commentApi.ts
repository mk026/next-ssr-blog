import { baseApi } from "./baseApi";

export const commentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPostComments: builder.query({ query: () => "/comments" }),
    addPostComment: builder.mutation({
      query: () => ({ url: "/comments", method: "POST" }),
    }),
  }),
});

export const { useGetPostCommentsQuery, useAddPostCommentMutation } =
  commentApi;
