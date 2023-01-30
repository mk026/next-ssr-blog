import { baseApi, HttpMethod } from "./baseApi";
import { AddBookmarkDto } from "../../models/bookmark";
import { config } from "../../config";

export const bookmarkApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBookmarks: builder.query<any, void>({
      query: () => config.bookmarksUrl,
    }),
    addBookmark: builder.mutation<any, AddBookmarkDto>({
      query: (body) => ({
        url: config.bookmarksUrl,
        method: HttpMethod.POST,
        body,
      }),
    }),
    removeBookmark: builder.mutation<any, number>({
      query: (id) => ({
        url: `${config.bookmarksUrl}/${id}`,
        method: HttpMethod.DELETE,
      }),
    }),
  }),
});

export const { useGetBookmarksQuery } = bookmarkApi;
