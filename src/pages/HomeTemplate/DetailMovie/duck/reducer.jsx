import * as types from "./types";

const initialState = {
  movie: null,
  error: null,
};

const detailMovieReducer = (state = initialState, action) => {
  switch (action.type) {
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
export default detailMovieReducer;
