import { baseApi } from "./baseApi";
import { ICategory } from "../../models/ICategory";
import { config } from "../../config";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<ICategory[], void>({
      query: () => config.categoriesUrl,
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
