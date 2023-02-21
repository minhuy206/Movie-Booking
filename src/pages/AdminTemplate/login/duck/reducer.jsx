import * as types from "./types";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      state.loading = false;
      state.data = action.data;
      state.error = null;
      return { ...state };
    }
    case types.LOGIN_FAIL: {
      state.loading = false;
      state.data = null;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default loginReducer;
