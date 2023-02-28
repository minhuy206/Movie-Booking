import * as types from "./types";

const initialState = {
  sliders: [
    {
      maBanner: 1,
      maPhim: 1282,
      hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png",
    },
    {
      maBanner: 2,
      maPhim: 1283,
      hinhAnh: "https://images3.alphacoders.com/103/1033561.jpg",
    },
    {
      maBanner: 3,
      maPhim: 1284,
      hinhAnh: "https://images3.alphacoders.com/117/1177621.jpg",
    },
  ],
  movies: [
    {
      maPhim: 10310,
      tenPhim: "Secrect Invasiona",
      biDanh: "secrect-invasiona",
      trailer: "https://www.youtube.com/watch?v=bfjVqhzcSx8",
      hinhAnh:
        "https://movienew.cybersoft.edu.vn/hinhanh/secrect-invasion_gp06.jpg",
      moTa: "A film by Marvel",
      maNhom: "GP06",
      ngayKhoiChieu: "2022-09-07T00:00:00",
      danhGia: 1,
      hot: true,
      dangChieu: true,
      sapChieu: false,
    },
    {
      maPhim: 10389,
      tenPhim: "Loki phiêu lưu",
      biDanh: "loki-phieu-luu",
      trailer: "https://youtu.be/nW948Va-l10",
      hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/lokiii_gp06.png",
      moTa: "Loki là một bộ phim truyền hình dài tập Mỹ ra mắt năm 2021, phát độc quyền trên nền tảng trực tuyến Disney+ của đạo diễn Michael Waldron. Phim dựa trên nhân vật cùng tên từ truyện tranh Marvel Comics.",
      maNhom: "GP06",
      ngayKhoiChieu: "2022-10-05T00:00:00",
      danhGia: 5,
      hot: true,
      dangChieu: false,
      sapChieu: true,
    },
    {
      maPhim: 10398,
      tenPhim: "Minion: Sự trỗi dậy của Gru",
      biDanh: "minion-su-troi-day-cua-gru",
      trailer: "https://youtu.be/SC7BfxpWieM",
      hinhAnh:
        "https://movienew.cybersoft.edu.vn/hinhanh/minion-su-troi-day-cua-gru_gp06.jpg",
      moTa: "Hài , Phiêu liêu",
      maNhom: "GP06",
      ngayKhoiChieu: "2022-10-12T00:00:00",
      danhGia: 1,
      hot: true,
      dangChieu: false,
      sapChieu: true,
    },
    {
      maPhim: 10389,
      tenPhim: "Loki phiêu lưu",
      biDanh: "loki-phieu-luu",
      trailer: "https://youtu.be/nW948Va-l10",
      hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/lokiii_gp06.png",
      moTa: "Loki là một bộ phim truyền hình dài tập Mỹ ra mắt năm 2021, phát độc quyền trên nền tảng trực tuyến Disney+ của đạo diễn Michael Waldron. Phim dựa trên nhân vật cùng tên từ truyện tranh Marvel Comics.",
      maNhom: "GP06",
      ngayKhoiChieu: "2022-10-05T00:00:00",
      danhGia: 5,
      hot: true,
      dangChieu: false,
      sapChieu: true,
    },
    {
      maPhim: 10398,
      tenPhim: "Minion: Sự trỗi dậy của Gru",
      biDanh: "minion-su-troi-day-cua-gru",
      trailer: "https://youtu.be/SC7BfxpWieM",
      hinhAnh:
        "https://movienew.cybersoft.edu.vn/hinhanh/minion-su-troi-day-cua-gru_gp06.jpg",
      moTa: "Hài , Phiêu liêu",
      maNhom: "GP06",
      ngayKhoiChieu: "2022-10-12T00:00:00",
      danhGia: 1,
      hot: true,
      dangChieu: false,
      sapChieu: true,
    },
  ],
  error: null,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SLIDERS_SUCCESS:
      state.sliders = action.data;
      return { ...state };
    case types.SLIDERS_FAIL:
      state.error = action.error;
      return { ...state };
    case types.MOVIES_SUCCESS:
      state.movies = action.data;
      return { ...state };
    case types.MOVIES_FAIL:
      state.error = action.error;
      return { ...state };
    default:
      return { ...state };
  }
};
export default homeReducer;
