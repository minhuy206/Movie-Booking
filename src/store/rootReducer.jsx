import { combineReducers } from "redux";
import loginReducer from "pages/AdminTemplate/login/duck/reducer";
import moviesReducer from "pages/AdminTemplate/movies-management/duck/reducer";
import usersReducer from "pages/AdminTemplate/user-management/duck/reducer";

const rootReducer = combineReducers({
  loginReducer,
  moviesReducer,
  usersReducer,
});

export default rootReducer;
