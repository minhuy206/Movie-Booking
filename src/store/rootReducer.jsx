import { combineReducers } from "redux";
import loginReducer from "pages/AdminTemplate/login/duck/reducer";
import movieReducer from "pages/AdminTemplate/movies-management/duck/reducer";
import userReducer from "pages/AdminTemplate/user-management/duck/reducer";
import { homeReducer } from "pages/HomeTemplate/Home/duck/reducer";

const rootReducer = combineReducers({
  loginReducer,
  movieReducer,
  userReducer,
  homeReducer,
});

export default rootReducer;
