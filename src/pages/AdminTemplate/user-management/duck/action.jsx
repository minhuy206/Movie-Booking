import api from "utils/apiUtils";
import * as types from "./types";

export const fetchUsers = (dispatch) => {
  return (dispatch) => {
    dispatch(request());
    api
      .get("QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP06")
      .then((result) => {
        dispatch(success(result.data.content));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fail(error));
      });
  };
};

const request = () => {
  return { type: types.USERS_REQUEST };
};
const success = (data) => {
  return { type: types.USERS_SUCCESS, data: data };
};
const fail = (error) => {
  return { type: types.USERS_FAIL, error: error };
};
