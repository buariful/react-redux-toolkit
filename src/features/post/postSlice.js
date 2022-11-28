import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPost = createAsyncThunk("reducerName/jkonoName", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

  return res.data;
});

export const postSlice = createSlice({
  name: "reducerName",
  initialState: {
    isLoading: false,
    posts: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPost.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
      state.error = null;
    });

    builder.addCase(fetchPost.rejected, (state, action) => {
      state.isLoading = false;
      state.posts = [];
      state.error = action.payload;
    });
  },
});

export default postSlice.reducer;
