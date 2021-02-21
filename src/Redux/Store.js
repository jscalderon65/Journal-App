import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./authReducer.js";
import { uiReducer } from "./uiReducer.js";
import thunk from "redux-thunk";
const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer
});
export const Store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
