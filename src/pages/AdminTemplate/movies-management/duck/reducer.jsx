import * as types from "./types";

const initialState = {
  loading: false,
  data: null,
  error: null,
  keyword: null,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MOVIES_REQUEST:
      state.data = null;
      state.error = null;
      state.loading = true;
      return { ...state };
    case types.MOVIES_SUCCESS:
      state.data = action.data;
      state.error = null;
      state.loading = false;
      return { ...state };
    case types.MOVIES_FAIL:
      state.data = null;
      state.error = action.error;
      state.loading = false;
      return { ...state };

    default:
      return { ...state };
  }
};

export default moviesReducer;
