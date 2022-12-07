import { IComment } from "../../models/IComment";
import { baseApi, HttpMethod } from "./baseApi";

export const COMMENTS_URL = "/api/comments";

export interface AddCommentDto {
  postId: number;
  content: string;
}

export const commentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPostComments: builder.query<IComment[], number>({
      query: (postId) => ({ url: COMMENTS_URL, params: { postId } }),
    }),
    addPostComment: builder.mutation<IComment, AddCommentDto>({
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
