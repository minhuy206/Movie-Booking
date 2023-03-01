import api from "utils/apiUtils";
import * as types from "./types";

export const fetchMovie = (id) => {
  return (dispatch) => {
    api
      .get(`QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
      .then((result) => {
        dispatch(fetchMovieSuccess(result.data.content));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchMovieError(error));
      });
  };
};

const fetchMovieSuccess = (data) => {
  return {
    type: types.MOVIE_SUCCESS,
    data: data,
  };
};

const fetchMovieError = (error) => {
  return {
    type: types.MOVIE_FAIL,
    error: error,
  };
};
