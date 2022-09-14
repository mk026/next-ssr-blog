import { createSlice } from "@reduxjs/toolkit";
import { IPost } from "../../models/IPost";

export interface PostState {
  post: IPost | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: PostState = {
  post: null,
  isLoading: false,
  error: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});
