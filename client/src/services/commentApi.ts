import { baseApi } from "./baseApi";

export const commentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPostComments: builder.query({ query: () => "/comments" }),
    addPostComment: builder.mutation({
      query: () => ({ url: "/comments", method: "POST" }),
    }),
    deletePostComment: builder.mutation({
      query: (id) => ({ url: `/comments/${id}`, method: "DELETE" }),
    }),
  }),
});

export const {
  useGetPostCommentsQuery,
  useAddPostCommentMutation,
  useDeletePostCommentMutation,
} = commentApi;
