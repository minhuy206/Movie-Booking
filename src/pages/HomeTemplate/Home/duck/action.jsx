import api from "utils/apiUtils";
import * as types from "./types";

export const fetchSliders = () => {
  return (dispatch) => {
    api
      .get("QuanLyPhim/LayDanhSachBanner")
      .then((result) => {
        console.log(result);
        dispatch(fetchSlidersSuccess(result.data.content));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchSlidersError(error));
      });
  };
};

const fetchSlidersSuccess = (data) => {
  return {
    type: types.SLIDERS_SUCCESS,
    data: data,
  };
};
const fetchSlidersError = (error) => {
  return {
    type: types.SLIDERS_SUCCESS,
    error: error,
  };
};

export const fetchMovies = () => {
  return (dispatch) => {
    api
      .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP06")
      .then((result) => {
        console.log(result);
        dispatch(fetchMoviesSuccess(result.data.content));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchMoviesError(error));
      });
  };
};

const fetchMoviesSuccess = (data) => {
  return {
    type: types.MOVIES_SUCCESS,
    data: data,
  };
};

const fetchMoviesError = (error) => {
  return {
    type: types.MOVIES_SUCCESS,
    error: error,
  };
};
