import { configureStore } from "@reduxjs/toolkit";
import signup from "./modules/signup";
import feeds from "./modules/feeds";

const store = configureStore({
  reducer: { feeds, signup },
});

export default store;
