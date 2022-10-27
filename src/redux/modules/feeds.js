import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const SERVER_URL = "http://localhost:3001/feeds";

// 피드 추가하기
export const __addFeeds = createAsyncThunk(
  "feeds/addFeeds",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(SERVER_URL, payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
// 피드 받아오기
export const __getFeeds = createAsyncThunk(
  "feeds/getFeeds",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(SERVER_URL);
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);
// 피드 삭제하기
export const __deleteFeeds = createAsyncThunk(
  "feeds/deleteFeeds",
  async (payload, thunkApi) => {
    try {
      await axios.delete(`${SERVER_URL}/${payload}`);
      return thunkApi.fulfillWithValue(payload);
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);
// 피드 수정하기
export const __editFeeds = createAsyncThunk(
  "feeds/editFeeds",
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
  feeds: [],
  isLoading: false,
  error: null,
};

export const feedsSlice = createSlice({
  name: "feeds",
  initialState,
  reducers: {},
  extraReducers: {
    // 피드 추가하기
    [__addFeeds.pending]: (state) => {
      state.isLoading = true;
    },
    [__addFeeds.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.feeds = [action.payload, ...state.feeds];
    },
    [__addFeeds.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //피드 받아오기
    [__getFeeds.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getFeeds.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.feeds = action.payload;
    },
    [__getFeeds.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getFeeds.fulfilled]: (state, action) => {
      state.feeds = action.payload;
    },
    //피드 삭제
    [__deleteFeeds.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__deleteFeeds.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.feeds = state.feeds.filter((feed) => feed.id !== action.payload);
    },
    [__deleteFeeds.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // 피드 수정
    [__editFeeds.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__editFeeds.fulfilled]: (state, action) => {
      state.isLoading = false;
      const idx = state.feeds.findIndex(
        (feed) => feed.postId === action.payload
      );
      state.feeds[idx] = action.payload;
    },
    [__editFeeds.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default feedsSlice.reducer;
