import { baseApi } from "./baseApi";

export const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({ query: () => "/posts" }),
  }),
});

export const { useGetPostsQuery } = postApi;
