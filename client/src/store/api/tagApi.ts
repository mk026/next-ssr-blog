import { baseApi } from "./baseApi";
import { config } from "../../config";

export const tagApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTags: builder.query<any, void>({
      query: () => config.tagsUrl,
    }),
    getPopularTags: builder.query<any, void>({
      query: () => config.popularTagsUrl,
    }),
  }),
});

export const { useGetTagsQuery } = tagApi;
