import { combineReducers } from "redux";
import loginReducer from "pages/AdminTemplate/login/duck/reducer";
import movieReducer from "pages/AdminTemplate/movies-management/duck/reducer";
import userReducer from "pages/AdminTemplate/user-management/duck/reducer";
import homeReducer from "pages/HomeTemplate/Home/duck/reducer";
import detailMovieReducer from "pages/HomeTemplate/DetailMovie/duck/reducer";

const rootReducer = combineReducers({
  loginReducer,
  movieReducer,
  userReducer,
  homeReducer,
  detailMovieReducer,
});

export default rootReducer;
