import { baseApi } from "./baseApi";

export const BOOKMARKS_URL = "/api/bookmarks";

export const bookmarkApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBookmarks: builder.query<any, void>({
      query: () => BOOKMARKS_URL,
    }),
  }),
});

export const { useGetBookmarksQuery } = bookmarkApi;
