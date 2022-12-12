import { ICategory } from "../../models/ICategory";
import { baseApi } from "./baseApi";

export const CATEGORIES_URL = "/api/categories";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<ICategory[], void>({
      query: () => CATEGORIES_URL,
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
