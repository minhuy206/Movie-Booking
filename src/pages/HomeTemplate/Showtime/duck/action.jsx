import api from "utils/apiUtils";
import * as types from "./types";

export const fetchShowtime = (id) => {
  return (dispatch) => {
    api
      .get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
      .then((result) => {
        dispatch(fetchShowtimeSuccess(result.data.content));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchShowtimeError(error));
      });
  };
};

const fetchShowtimeSuccess = (data) => {
  return {
    type: types.SHOWTIME_SUCCESS,
    data: data,
  };
};

const fetchShowtimeError = (error) => {
  return {
    type: types.SHOWTIME_FAIL,
    error: error,
  };
};
