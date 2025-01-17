import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Post } from "../types/post.type";

const initialState: Post[] = [];

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      const isDublicate = state.some(
        (item) => item.text.toLowerCase() === action.payload.text.toLowerCase()
      );

      if (isDublicate) {
        return state;
      }
      return [...state, action.payload];
    },
    findPost: (state, action: PayloadAction<string>) => {
      const newState = state.filter((item) =>
        item.text.toLowerCase().includes(action.payload.toLowerCase())
      );

      return newState;
    },
  },
});

export const { addPost,findPost } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
