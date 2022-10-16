import { IPost } from "../models/IPost";
import { PostFormValues } from "../validation/postValidation";
import { baseApi, HttpMethod } from "./baseApi";

export const POSTS_URL = "/posts";

export const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], void>({ query: () => POSTS_URL }),
    addPost: builder.mutation<IPost, PostFormValues>({
      query: (body) => ({ url: POSTS_URL, method: HttpMethod.POST, body }),
    }),
    updatePost: builder.mutation<IPost, Partial<IPost>>({
      query: (body) => ({ url: POSTS_URL, method: HttpMethod.PUT, body }),
    }),
    deletePost: builder.mutation<void, string>({
      query: (id) => ({ url: `${POSTS_URL}/${id}`, method: HttpMethod.DELETE }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postApi;
