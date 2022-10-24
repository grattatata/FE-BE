import { configureStore } from "@reduxjs/toolkit";
import user from "./modules/user";
import feeds from "./modules/feeds";

const store = configureStore({
  reducer: { user },
  reducer: { feeds },
});

export default store;
