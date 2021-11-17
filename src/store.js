import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const configstore = (initialState) => {
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
};

export default configstore;
