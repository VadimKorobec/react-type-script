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
      return thunkApi.rejectWithValue(
        e.message || "Ошибка при загрузке постов"
      );
    }

    return thunkApi.rejectWithValue("Неизвестная ошибка при загрузке постов");
  }
});
