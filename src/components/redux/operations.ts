import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { Post } from "../types/post.type";

axios.defaults.baseURL = "http://localhost:8080";

export const fetchPosts = createAsyncThunk<
  Post[],
  void,
  { rejectValue: string }
>("posts/fetchPosts", async (_, thunkApi) => {
  try {
    const response = await axios.get("/posts");
    return response.data.posts;
  } catch (e: unknown) {
    if (e instanceof Error) {
      return thunkApi.rejectWithValue(e.message || "Error loading posts");
    }

    return thunkApi.rejectWithValue("Unknown error when loading posts");
  }
});

export const addPost = createAsyncThunk<Post, Post, { rejectValue: string }>(
  "posts/addPost",
  async (post: Post, thunkApi) => {
    try {
      const response = await axios.post("/posts", post);
      
      return response.data.post;
    } catch (e: unknown) {
      if (e instanceof Error) {
        return thunkApi.rejectWithValue(e.message || "Error added post");
      }

      return thunkApi.rejectWithValue("Unknown error occurred ");
    }
  }
);
