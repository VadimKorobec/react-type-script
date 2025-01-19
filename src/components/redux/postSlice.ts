import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Post } from "../types/post.type";
import { fetchPosts } from "./operations";

export interface PostsState {
  posts: Post[];
  isLoading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  isLoading: false,
  error: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      const isDublicate = state.posts.some(
        (item) => item.body.toLowerCase() === action.payload.body.toLowerCase()
      );

      if (isDublicate) {
        return state;
      }
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    },
    findPost: (state, action: PayloadAction<string>) => {
      const filteredPosts = state.posts.filter((item) =>
        item.body.toLowerCase().includes(action.payload.toLowerCase())
      );

      return {
        ...state,
        posts: filteredPosts,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        return {
          ...state,
          isLoading: false,
          posts: action.payload,
          error: null,
        };
      })
      .addCase(
        fetchPosts.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          return {
            ...state,
            isLoading: false,
            error: action.payload || "Произошла ошибка при загрузке данных",
          };
        }
      );
  },
});

export const { addPost, findPost } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
