import { IComment } from "../models/IComment";
import { baseApi } from "./baseApi";

export const COMMENTS_URL = "/comments";

export const commentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPostComments: builder.query<IComment[], string>({
      query: (postId) => ({ url: COMMENTS_URL, params: { postId } }),
    }),
    addPostComment: builder.mutation<IComment, IComment>({
      query: (body) => ({ url: COMMENTS_URL, method: "POST", body }),
    }),
    updatePostComment: builder.mutation<IComment, Partial<IComment>>({
      query: (body) => ({ url: COMMENTS_URL, method: "PUT", body }),
    }),
    deletePostComment: builder.mutation<void, string>({
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
