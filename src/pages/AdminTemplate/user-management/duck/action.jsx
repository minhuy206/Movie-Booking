import api from "utils/apiUtils";
import * as types from "./types";

export const fetchUsers = () => {
  return (dispatch) => {
    api
      .get("QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP06")
      .then((result) => {
        dispatch(fetchUsersSuccess(result.data.content));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchUsersFail(error));
      });
  };
};

const fetchUsersSuccess = (data) => {
  return { type: types.USERS_SUCCESS, data: data };
};

const fetchUsersFail = (error) => {
  return { type: types.USERS_FAIL, error: error };
};

export const fetchUser = (taiKhoan) => {
  return (dispatch) => {
    api
      .post(`QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`)
      .then((result) => {
        dispatch(fetchUserSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(fetchUserFail(error));
      });
  };
};

const fetchUserSuccess = (data) => {
  return {
    type: types.USER_SUCCESS,
    data: data,
  };
};

const fetchUserFail = (error) => {
  return { type: types.USER_FAIL, error: error };
};
