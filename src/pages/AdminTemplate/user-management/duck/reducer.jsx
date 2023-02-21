import * as types from "./types";

const initialState = {
  users: null,
  user: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USERS_SUCCESS:
      state.users = action.data;
      return { ...state };
    case types.USERS_FAIL:
      state.error = action.error;
      return { ...state };
    case types.USER_SUCCESS:
      state.user = action.data;
      return { ...state };
    case types.USER_FAIL:
      state.error = action.error;
      return { ...state };
    default:
      return { ...state };
  }
};

export default userReducer;
