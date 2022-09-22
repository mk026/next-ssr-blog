import { baseApi } from "./baseApi";

export const POSTS_URL = "/posts";

export const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({ query: () => POSTS_URL }),
    addPost: builder.mutation({
      query: (body) => ({ url: POSTS_URL, method: "POST", body }),
    }),
    updatePost: builder.mutation({
      query: (body) => ({ url: POSTS_URL, method: "PUT", body }),
    }),
    deletePost: builder.mutation({
      query: (id) => ({ url: `${POSTS_URL}/${id}`, method: "DELETE" }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postApi;
