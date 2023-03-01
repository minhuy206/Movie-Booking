import * as types from "./types";

const initialState = {
  showtime: {
    heThongRapChieu: [
      {
        cumRapChieu: [
          {
            lichChieuPhim: [
              {
                maLichChieu: "",
                maRap: "",
                tenRap: "Rạp 4",
                ngayChieuGioChieu: "2022-09-05T09:59:37",
                giaVe: 75000,
                thoiLuong: 120,
              },
            ],
            maCumRap: "bhd-star-cineplex-bitexco",
            tenCumRap: "BHD Star Cineplex - Bitexco",
            hinhAnh:
              "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
            diaChi: "L3-Bitexco Icon 68, 2 Hải Triều, Q.1",
          },
        ],
        maHeThongRap: "BHDStar",
        tenHeThongRap: "BHD Star Cineplex",
        logo: "https://movienew.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
      },
    ],
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

const showtimeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOWTIME_SUCCESS:
      state.showtime = action.data;
      return { ...state };
    case types.SHOWTIME_FAIL:
      state.error = action.error;
      return { ...state };
    default:
      return { ...state };
  }
};
export default showtimeReducer;
