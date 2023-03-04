import { act } from "react-dom/test-utils";
import * as types from "./types";

const initialState = {
  loading: true,
  info: {
    thongTinPhim: {
      maLichChieu: 45478,
      tenCumRap: "BHD Star Cineplex - Bitexco",
      tenRap: "Rạp 4",
      diaChi: "L3-Bitexco Icon 68, 2 Hải Triều, Q.1",
      tenPhim: "Secrect Invasiona",
      hinhAnh:
        "https://movienew.cybersoft.edu.vn/hinhanh/secrect-invasion_gp06.jpg",
      ngayChieu: "05/09/2022",
      gioChieu: "09:09",
    },
    danhSachGhe: [],
  },
  error: null,
  selectingSeat: [],
  totalPrice: 0,
};

const ticketRoomReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INFO_SUCCESS:
      state.loading = false;
      state.info = action.data;
      return { ...state };
    case types.INFO_FAIL:
      state.loading = false;
      state.error = action.error;
      return { ...state };
    case types.SELECT__SEAT:
      state.selectingSeat = [...state.selectingSeat, action.seat];
      state.totalPrice += action.price;
      return { ...state };
    case types.UNSELECT__SEAT:
      state.selectingSeat = state.selectingSeat.filter(
        (seat) => seat.maGhe !== action.seat.maGhe
      );
      state.totalPrice -= action.price;
      return { ...state };
    case types.BOOKING__REQUEST:
      state.loading = true;
      return { ...state };
    case types.BOOKING__SUCCESS:
      state.loading = false;
      return { ...state };
    case types.BOOKING__FAIL:
      state.loading = false;
      state.error = action.error;
      return { ...state };
    default:
      return { ...state };
  }
};
export default ticketRoomReducer;
