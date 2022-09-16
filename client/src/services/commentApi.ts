import { baseApi } from "./baseApi";

export const commentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPostComments: builder.query({ query: () => "/comments" }),
  }),
});

export const { useGetPostCommentsQuery } = commentApi;
