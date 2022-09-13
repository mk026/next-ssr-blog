import { configureStore } from "@reduxjs/toolkit";

const rootReducer = () => {};

export const setupStore = () => configureStore({ reducer: rootReducer });
