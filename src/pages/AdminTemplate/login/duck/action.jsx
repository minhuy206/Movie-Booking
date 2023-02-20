import * as types from "./types";
import api from "utils/apiUtils";

export const login = (user, navigate) => {
  return (dispatch) => {
    dispatch(request());
    api
      .post("QuanLyNguoiDung/DangNhap", user)
      .then((result) => {
        if (result.data.content.maLoaiNguoiDung === "KhachHang") {
          return Promise.reject({
            response: {
              data: {
                content: "Bạn không có quyền truy cập vào hệ thống",
              },
            },
          });
        }
        dispatch(success(result.data.content));

        // Lưu login
        localStorage.setItem("User", JSON.stringify(result.data.content));
        navigate("/admin", { replace: true });
      })
      .catch((error) => {
        dispatch(fail(error));
        console.log(error);
      });
  };
};

const request = () => {
  return { type: types.LOGIN_REQUEST };
};
const success = (data) => {
  return { type: types.LOGIN_SUCCESS, data: data };
};
const fail = (error) => {
  return { type: types.LOGIN_FAIL, error: error };
};
