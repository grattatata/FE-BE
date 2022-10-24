// import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

// const SERVER_URL = "http://222.111.114.132:4000/users/signup";

const initialState = {
  users: [],
  isLoading: false,
};

const signUpSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default signUpSlice.reducer;
