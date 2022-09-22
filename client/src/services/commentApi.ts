import { baseApi } from "./baseApi";

export const commentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPostComments: builder.query({ query: () => "/comments" }),
    addPostComment: builder.mutation({
      query: () => ({ url: "/comments", method: "POST" }),
    }),
    updatePostComment: builder.mutation({
      query: () => ({ url: "/comments", method: "PUT" }),
    }),
    deletePostComment: builder.mutation({
      query: (id) => ({ url: `/comments/${id}`, method: "DELETE" }),
    }),
  }),
});

export const {
  useGetPostCommentsQuery,
  useAddPostCommentMutation,
  useUpdatePostCommentMutation,
  useDeletePostCommentMutation,
} = commentApi;
