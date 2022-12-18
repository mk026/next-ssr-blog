import { baseApi, HttpMethod } from "./baseApi";

export const BOOKMARKS_URL = "/api/bookmarks";

export const bookmarkApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBookmarks: builder.query<any, void>({
      query: () => BOOKMARKS_URL,
    }),
    addBookmark: builder.mutation<any, any>({
      query: (body) => ({ url: BOOKMARKS_URL, method: HttpMethod.POST, body }),
    }),
    removeBookmark: builder.mutation<any, number>({
      query: (id) => ({
        url: `${BOOKMARKS_URL}/${id}`,
        method: HttpMethod.DELETE,
      }),
    }),
  }),
});

export const { useGetBookmarksQuery } = bookmarkApi;
