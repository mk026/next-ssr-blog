import { baseApi, HttpMethod } from "./baseApi";
import { IPost } from "../../models/IPost";
import { config } from "../../config";

export interface AddPostDto {
  title: string;
  description: string;
  content: string;
  categoryId: number;
}

export interface SearchPostsDto {
  title?: string;
  description?: string;
  content?: string;
  authorId?: number;
  categoryId?: number;
}

export interface UpdatePostDto extends Partial<AddPostDto> {}

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
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postApi;
