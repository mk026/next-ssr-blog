import { baseApi, HttpMethod } from "./baseApi";
import { config } from "../../config";
import {
  AddPostDto,
  IPost,
  SearchPostsDto,
  UpdatePostDto,
} from "../../models/post";

export const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], void>({ query: () => config.postsUrl }),
    getPopularPosts: builder.query<IPost[], void>({
      query: () => config.popularPostsUrl,
    }),
    getPost: builder.query<IPost, number>({
      query: (id) => `${config.postsUrl}/${id}`,
    }),
    searchPosts: builder.query<IPost[], SearchPostsDto>({
      query: (params) => ({
        url: config.searchPostsUrl,
        method: HttpMethod.GET,
        params,
      }),
    }),
    addPost: builder.mutation<IPost, AddPostDto>({
      query: (body) => ({
        url: config.postsUrl,
        method: HttpMethod.POST,
        body,
      }),
    }),
    updatePost: builder.mutation<IPost, UpdatePostDto>({
      query: (body) => ({ url: config.postsUrl, method: HttpMethod.PUT, body }),
    }),
    deletePost: builder.mutation<void, string>({
      query: (id) => ({
        url: `${config.postsUrl}/${id}`,
        method: HttpMethod.DELETE,
      }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPopularPostsQuery,
  useGetPostQuery,
  useSearchPostsQuery,
  useLazySearchPostsQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postApi;
