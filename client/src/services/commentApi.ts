import { baseApi } from "./baseApi";

export const COMMENTS_URL = "/comments";

export const commentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPostComments: builder.query({ query: () => COMMENTS_URL }),
    addPostComment: builder.mutation({
      query: (body) => ({ url: COMMENTS_URL, method: "POST", body }),
    }),
    updatePostComment: builder.mutation({
      query: (body) => ({ url: COMMENTS_URL, method: "PUT", body }),
    }),
    deletePostComment: builder.mutation({
      query: (id) => ({ url: `${COMMENTS_URL}/${id}`, method: "DELETE" }),
    }),
  }),
});

export const {
  useGetPostCommentsQuery,
  useAddPostCommentMutation,
  useUpdatePostCommentMutation,
  useDeletePostCommentMutation,
} = commentApi;
