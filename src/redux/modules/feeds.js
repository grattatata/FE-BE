import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const SERVER_URL = "http://localhost:3001/feeds";

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
  },
});

export default feedsSlice.reducer;
