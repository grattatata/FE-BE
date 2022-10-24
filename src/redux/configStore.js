import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import signup from "./modules/signup";
import feeds from "./modules/feeds";

const rootReducer = combineReducers({
  signup,
  feeds,
});
const store = createStore(rootReducer);

export default store;
