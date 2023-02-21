import { Alert, Cascader, DatePicker, Form, InputNumber, Select } from "antd";
import { useFormik } from "formik";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import api from "utils/apiUtils";
import { number, object, string } from "yup";
import { fetchMovie } from "../duck/action";

const Showtime = () => {
  const [state, setState] = useState({
    heThongRapChieu: [],
    cumRapChieu: null,
  });
  const dispatch = useDispatch();
  const props = useSelector((state) => state.movieReducer);

  console.log(props.movie);
  const param = useParams();

  // call api lấy thông tin hệ thống rạp và thông tin phim
  useEffect(() => {
    // call api lấy thông tin hệ thống rạp
    dispatch(fetchMovie(param.id));

    // call api lấy thông tin phim
    api
      .get("QuanLyRap/LayThongTinHeThongRap")
      .then((result) => {
        setState({ ...state, heThongRapChieu: result.data.content });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const formik = useFormik({
    initialValues: {
      maPhim: param.id,
      ngayChieuGioChieu: "",
      maRap: "",
      giaVe: "",
    },
    validationSchema: object({
      maRap: string().required("Vui lòng chọn rạp"),
      ngayChieuGioChieu: string().required("Vui lòng chọn ngày giờ chiếu phim"),
      giaVe: number().required("Vui lòng nhập giá vé"),
    }),
    onSubmit: (values) => {
      api
        .post("QuanLyDatVe/TaoLichChieu", values)
        .then((result) => {
          alert(result.data.message);
        })
        .catch((error) => {
          console.log(error);
          alert(error.response.data.content);
        });
    },
  });

  // tạo object mới từ state.(hệ thống rạp chiếu)
  const convertObj = (value, property1, property2) => {
    return value?.map((items) => ({
      label: items[property1],
      value: items[property2],
    }));
  };

  const handleChangeHeThongRapSelect = (value) => {
    api
      .get(`QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${value}`)
      .then((result) => {
        setState({ ...state, cumRapChieu: result.data.content });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeDatePicker = (value) => {
    const ngayChieuGioChieu = moment(value?.$d).format("DD/MM/YYYY hh:mm:ss");
    formik.setFieldValue("ngayChieuGioChieu", ngayChieuGioChieu);
  };

  return (
    <>
      <h1 className="text-center text-4xl mb-5">Tạo lịch chiếu</h1>
      <img
        className="m-auto mb-5"
        src={props.movie?.hinhAnh}
        alt=""
        style={{ width: "200px" }}
      />
      <h2 className="text-center text-2xl mb-5">
        Phim: {props.movie?.tenPhim}
      </h2>
      <Form
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 18,
        }}
        layout="horizontal"
        style={{
          margin: "auto",
          maxWidth: 600,
        }}
        onSubmitCapture={formik.handleSubmit}
        validateMessages={formik.validationSchema}
      >
        <Form.Item label="Hệ thống rạp">
          <Select
            options={convertObj(
              state.heThongRapChieu,
              "tenHeThongRap",
              "maHeThongRap"
            )}
            onChange={handleChangeHeThongRapSelect}
          />
          {formik.errors.maRap && formik.touched.maRap && (
            <Alert type="error" message={formik.errors.maRap} banner />
          )}
        </Form.Item>
        <Form.Item label="Cụm rạp">
          <Select
            onChange={handleChange("maRap")}
            options={convertObj(state.cumRapChieu, "tenCumRap", "maCumRap")}
          />
          {formik.errors.maRap && formik.touched.maRap && (
            <Alert type="error" message={formik.errors.maRap} banner />
          )}
        </Form.Item>
        <Form.Item label="Ngày giờ chiếu">
          <DatePicker
            format={"DD/MM/YYYY hh:mm:ss"}
            showTime
            onChange={handleChangeDatePicker}
          />
          {formik.errors.ngayChieuGioChieu &&
            formik.touched.ngayChieuGioChieu && (
              <Alert
                type="error"
                message={formik.errors.ngayChieuGioChieu}
                banner
              />
            )}
        </Form.Item>
        <Form.Item label="Giá vé">
          <InputNumber
            onChange={handleChange("giaVe")}
            min={75000}
            max={200000}
          />
          {formik.errors.giaVe && formik.touched.giaVe && (
            <Alert type="error" message={formik.errors.giaVe} banner />
          )}
        </Form.Item>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white rounded py-2 px-4"
            type="submit"
          >
            Tạo lịch chiếu
          </button>
        </div>
      </Form>
    </>
  );
};
export default Showtime;
