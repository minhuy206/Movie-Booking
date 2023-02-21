import api from "utils/apiUtils";
import * as types from "./types";

export const fetchMovies = () => {
  return (dispatch) => {
    api
      .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP06")
      .then((result) => {
        dispatch(fetchMoviesSuccess(result.data.content));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchMoviesFail(error));
      });
  };
};

const fetchMoviesSuccess = (data) => {
  return { type: types.MOVIES_SUCCESS, data: data };
};
const fetchMoviesFail = (error) => {
  return { type: types.MOVIES_FAIL, error: error };
};

export const fetchMovie = (id) => {
  return (dispatch) => {
    api
      .get(`QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
      .then((result) => {
        dispatch(fetchMovieSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(fetchMovieFail(error));
      });
  };
};

const fetchMovieSuccess = (data) => {
  return {
    type: types.MOVIE_SUCCESS,
    data: data,
  };
};
const fetchMovieFail = (error) => {
  return { type: types.MOVIE_FAIL, error: error };
};
