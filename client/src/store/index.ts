import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../services/baseApi";

import { authSlice } from "./slices/authSlice";
import { postsSlice } from "./slices/postsSlice";
import { userSlice } from "./slices/userSlice";

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  user: userSlice.reducer,
  posts: postsSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

const store = setupStore();

export default store;
