import { combineReducers } from "redux";
import blogReducer from "./reducer/blogReducer";

const rootReducer = combineReducers({
  blogs: blogReducer
});

export default rootReducer;
