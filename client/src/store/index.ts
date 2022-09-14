import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { authSlice } from "./slices/authSlice";
import { userSlice } from "./slices/userSlice";

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  user: userSlice.reducer,
});

export const setupStore = () => configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
