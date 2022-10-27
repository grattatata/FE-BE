import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// const SERVER_URL = "http://localhost:3001/Posts";
const SERVER_URL = "http://222.111.114.132:4000/posts";

// 피드 추가하기
export const __addPosts = createAsyncThunk("posts/addPosts", async (payload, thunkAPI) => {
  try {
    const { data } = await axios.post(SERVER_URL, payload);
    return thunkAPI.fulfillWithValue(data);
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});
// 피드 받아오기
export const __getPosts = createAsyncThunk("posts/getPosts", async (payload, thunkApi) => {
  try {
    const { data } = await axios.get(SERVER_URL);
    return thunkApi.fulfillWithValue(data);
  } catch (e) {
    return thunkApi.rejectWithValue(e);
  }
});
// 피드 삭제하기
export const __deletePosts = createAsyncThunk("posts/deletePosts", async (payload, thunkApi) => {
  try {
    await axios.delete(`${SERVER_URL}/${payload}`);
    return thunkApi.fulfillWithValue(payload);
  } catch (e) {
    return thunkApi.rejectWithValue(e);
  }
});
// 피드 수정하기
export const __editPosts = createAsyncThunk("posts/editPosts", async (payload, thunkApi) => {
  try {
    const { data } = await axios.patch(`${SERVER_URL}/${payload.postId}`, payload);
    return thunkApi.fulfillWithValue(data);
  } catch (e) {
    return thunkApi.rejectWithValue(e);
  }
});

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [__addPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__addPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.Posts = [action.payload, ...state.Posts];
    },
    [__addPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getPosts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.Posts = action.payload;
    },
    [__getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getPosts.fulfilled]: (state, action) => {
      state.Posts = action.payload;
    },
    [__deletePosts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__deletePosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.Posts = state.Posts.filter((feed) => feed.id !== action.payload);
    },
    [__deletePosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__editPosts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__editPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      const idx = state.Posts.findIndex((feed) => feed.postId === action.payload);
      state.Posts[idx] = action.payload;
    },
    [__editPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default postsSlice.reducer;
