import { IComment } from "../models/IComment";
import { CommentFormValues } from "../validation/commentValidation";
import { baseApi, HttpMethod } from "./baseApi";

export const COMMENTS_URL = "/comments";

export const commentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPostComments: builder.query<IComment[], number>({
      query: (postId) => ({ url: COMMENTS_URL, params: { postId } }),
    }),
    addPostComment: builder.mutation<IComment, CommentFormValues>({
      query: (body) => ({ url: COMMENTS_URL, method: HttpMethod.POST, body }),
    }),
    updatePostComment: builder.mutation<IComment, Partial<IComment>>({
      query: (body) => ({ url: COMMENTS_URL, method: HttpMethod.PUT, body }),
    }),
    deletePostComment: builder.mutation<void, string>({
      query: (id) => ({
        url: `${COMMENTS_URL}/${id}`,
        method: HttpMethod.DELETE,
      }),
    }),
  }),
});

export const {
  useGetPostCommentsQuery,
  useAddPostCommentMutation,
  useUpdatePostCommentMutation,
  useDeletePostCommentMutation,
} = commentApi;
