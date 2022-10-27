import { configureStore } from "@reduxjs/toolkit";
import signup from "./modules/signup";
import posts from "./modules/posts";

const store = configureStore({
  reducer: { posts, signup },
});

export default store;
