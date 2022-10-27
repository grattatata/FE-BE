import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const SERVER_URL = "http://localhost:3001/comments";

// 댓글 추가하기
export const __addComments = createAsyncThunk(
  "comments/addComments",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(SERVER_URL, payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
// 댓글 받아오기
export const __getComments = createAsyncThunk(
  "comments/getComments",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(SERVER_URL);
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);
// 댓글 삭제하기
export const __deleteComments = createAsyncThunk(
  "comments/deleteComments",
  async (payload, thunkApi) => {
    try {
      await axios.delete(`${SERVER_URL}/${payload}`);
      return thunkApi.fulfillWithValue(payload);
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);
// 댓글 수정하기
export const __editComments = createAsyncThunk(
  "comments/editComments",
  async (payload, thunkApi) => {
    try {
      const { data } = await axios.patch(
        `${SERVER_URL}/${payload.postId}`,
        payload
      );
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    // 댓글 추가하기
    [__addComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__addComments.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.comments = [action.payload, ...state.comments];
    },
    [__addComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //댓글 받아오기
    [__getComments.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__getComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getComments.fulfilled]: (state, action) => {
      state.comments = action.payload;
    },
    //댓글 삭제
    [__deleteComments.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__deleteComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = state.comments.filter(
        (comment) => comment.postId !== action.payload
      );
    },
    [__deleteComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // 댓글 수정
    [__editComments.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__editComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      const idx = state.comments.findIndex(
        (comment) => comment.postId === action.payload.postId
      );
      state.comments[idx] = action.payload;
    },
    [__editComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default commentsSlice.reducer;
