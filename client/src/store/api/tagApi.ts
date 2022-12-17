import { baseApi } from "./baseApi";

export const TAG_URL = "/api/tags";

export const tagApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTags: builder.query<any, void>({
      query: () => TAG_URL,
    }),
  }),
});

export const { useGetTagsQuery } = tagApi;
