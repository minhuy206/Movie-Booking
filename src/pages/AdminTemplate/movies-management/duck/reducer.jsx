import * as types from "./types";

const initialState = {
  movies: null,
  error: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MOVIES_SUCCESS:
      state.movies = action.data;
      return { ...state };
    case types.MOVIES_FAIL:
      state.error = action.error;
      return { ...state };
    case types.MOVIE_SUCCESS:
      state.movie = action.data;
      return { ...state };
    case types.MOVIE_FAIL:
      state.error = action.error;
      return { ...state };
    default:
      return { ...state };
  }
};

export default movieReducer;
