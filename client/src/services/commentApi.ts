import { baseApi } from "./baseApi";

export const commentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPostComments: builder.query({ query: () => "/comments" }),
    addPostComment: builder.mutation({
      query: (body) => ({ url: "/comments", method: "POST", body }),
    }),
    updatePostComment: builder.mutation({
      query: (body) => ({ url: "/comments", method: "PUT", body }),
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
