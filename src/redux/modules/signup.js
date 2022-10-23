import axios from "axios";
import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";

const SERVER_URL = 'http://localhost:3001/users'

const initialState = {
  users: [],
  isLoading: false,
};

//회원가입
export const postUser = createAsyncThunk(
  "signup/postUser",
  async (payload, thunkAPI) => {
    try{
      const data = await axios.post(
        `${SERVER_URL}`,payload
      )
      return thunkAPI.fulfillWithValue(data.data)
    } catch (error){
      if(error.response.data.ok === false){
        alert(`${error.response.data.errorMessage}`)
      }
      return thunkAPI.rejectWithValue(error)
    } 
  }
)

//아이디 중복확인     
export const CheckUserId = createAsyncThunk(
  "signup/CheckUserId",
  async (payload, thunkAPI) => {
    try{
      const data = await axios.get(
        `${SERVER_URL}`,payload
      )
      return thunkAPI.fulfillWithValue(data.data)
    } catch (error) {
      alert('이미 사용중인 아이디 입니다.')
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

const signUpSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    changeCheckId: (state, payload) => {
      state.checkId = state.action
    }
  },
  extraReducers: {
    [postUser.pending]: (state) => {
      state.isLoading = true
    },
    [postUser.fulfilled]: (state,action) => {
      state.isLoading = false
      state.users = [action.payload, ...state.users]
    },
    [postUser.rejected]: (state,action) => {
      state.isLoading = false
      state.error = action.payload
    },
    [CheckUserId.rejected]: (state, action)=>{
      state.isLoading = false;
      state.users = action.payload
    }
  },
});

export const {changeCheckId} = signUpSlice.actions
export default signUpSlice.reducer;
