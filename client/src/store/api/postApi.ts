import { baseApi, HttpMethod } from "./baseApi";
import { IPost } from "../../models/IPost";

export const POSTS_URL = "/api/posts";
export const POPULAR_POSTS_URL = "/api/posts/popular";
export const SEARCH_POSTS_URL = "/api/posts/search";

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
    getPosts: builder.query<IPost[], void>({ query: () => POSTS_URL }),
    getPopularPosts: builder.query<IPost[], void>({
      query: () => POPULAR_POSTS_URL,
    }),
    getPost: builder.query<IPost, number>({
      query: (id) => `${POSTS_URL}/${id}`,
    }),
    searchPosts: builder.query<IPost[], SearchPostsDto>({
      query: (params) => ({
        url: SEARCH_POSTS_URL,
        method: HttpMethod.GET,
        params,
      }),
    }),
    addPost: builder.mutation<IPost, AddPostDto>({
      query: (body) => ({ url: POSTS_URL, method: HttpMethod.POST, body }),
    }),
    updatePost: builder.mutation<IPost, UpdatePostDto>({
      query: (body) => ({ url: POSTS_URL, method: HttpMethod.PUT, body }),
    }),
    deletePost: builder.mutation<void, string>({
      query: (id) => ({ url: `${POSTS_URL}/${id}`, method: HttpMethod.DELETE }),
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
