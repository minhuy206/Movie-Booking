import api from "utils/apiUtils";
import * as types from "./types";

export const fetchInfo = (id) => {
  return (dispatch) => {
    api
      .get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`)
      .then((result) => {
        dispatch(fetchInfoSuccess(result.data.content));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchInfoError(error));
      });
  };
};

const fetchInfoSuccess = (data) => {
  return {
    type: types.INFO_SUCCESS,
    data: data,
  };
};

const fetchInfoError = (error) => {
  return {
    type: types.INFO_FAIL,
    error: error,
  };
};

// select seat

export const selectSeat = (seat) => {
  return {
    type: types.SELECT__SEAT,
    seat: seat,
    price: seat.giaVe,
  };
};
export const unselectSeat = (seat) => {
  return {
    type: types.UNSELECT__SEAT,
    seat: seat,
    price: seat.giaVe,
  };
};

// Booking ticket

export const handleBookingTicket = (ticket, message) => {
  return (dispatch) => {
    dispatch(handleBookingTicketRequest());
    api
      .post("QuanLyDatVe/DatVe", ticket)
      .then((result) => {
        dispatch(handleBookingTicketSuccess());
        message.success("Processing complete!");
      })
      .catch((error) => {
        dispatch(handleBookingTicketFail(error));
        console.log(error);
        message.error(error.response.data.content);
      });
  };
};

const handleBookingTicketRequest = () => {
  return {
    type: types.BOOKING__REQUEST,
  };
};

const handleBookingTicketSuccess = () => {
  return {
    type: types.BOOKING__SUCCESS,
  };
};

const handleBookingTicketFail = (error) => {
  return {
    type: types.BOOKING__FAIL,
    error: error,
  };
};

export const resetTicketRoomReducer = () => {
  return {
    type: types.RESET__TICKET__ROOM__REDUCER,
  };
};
