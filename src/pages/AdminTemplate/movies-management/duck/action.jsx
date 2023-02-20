import api from "utils/apiUtils";
import * as types from "./types";

export const fetchMovies = (dispatch) => {
  return (dispatch) => {
    dispatch(request());
    api
      .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP06")
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
  return { type: types.MOVIES_REQUEST };
};
const success = (data) => {
  return { type: types.MOVIES_SUCCESS, data: data };
};
const fail = (error) => {
  return { type: types.MOVIES_FAIL, error: error };
};
