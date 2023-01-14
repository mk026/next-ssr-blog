import { baseApi } from "./baseApi";
import { ITag } from "../../models/ITag";
import { config } from "../../config";

export const tagApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTags: builder.query<ITag[], void>({
      query: () => config.tagsUrl,
    }),
    getPopularTags: builder.query<ITag[], void>({
      query: () => config.popularTagsUrl,
    }),
  }),
});

export const { useGetTagsQuery, useGetPopularTagsQuery } = tagApi;
