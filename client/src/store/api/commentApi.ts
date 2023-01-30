import { baseApi, HttpMethod } from "./baseApi";
import { config } from "../../config";
import {
  AddCommentDto,
  IComment,
  UpdateCommentDto,
} from "../../models/comment";

export const commentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPostComments: builder.query<IComment[], number>({
      query: (postId) => ({ url: config.commentsUrl, params: { postId } }),
    }),
    addPostComment: builder.mutation<IComment, AddCommentDto>({
      query: (body) => ({
        url: config.commentsUrl,
        method: HttpMethod.POST,
        body,
      }),
    }),
    updatePostComment: builder.mutation<IComment, UpdateCommentDto>({
      query: (body) => ({
        url: config.commentsUrl,
        method: HttpMethod.PUT,
        body,
      }),
    }),
    deletePostComment: builder.mutation<void, string>({
      query: (id) => ({
        url: `${config.commentsUrl}/${id}`,
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
