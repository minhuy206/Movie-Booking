import * as types from "./types";

const initialState = {
  movie: {
    maPhim: 0,
    tenPhim: "",
    biDanh: "",
    dangChieu: false,
    danhGia: 0,
    hinhAnh: "",
    hot: true,
    maNhom: "GP06",
    moTa: "",
    ngayKhoiChieu: "",
    sapChieu: true,
    trailer: "",
  },
  error: null,
};

const detailMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MOVIE_SUCCESS:
      state.movie = action.data;
      return { ...state };
    case types.MOVIE_FAIL:
      state.error = action.error;
      return { ...state };
    default:
      return { ...state };
  }
};
export default detailMovieReducer;
