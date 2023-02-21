import { DatePicker, Form, Input, InputNumber, Switch, Alert } from "antd";
import React, { useRef, useState, useEffect } from "react";
import { object, string, number } from "yup";
import { useFormik } from "formik";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import api from "utils/apiUtils";
import { fetchMovie } from "../duck/action";
const { TextArea } = Input;

export default function EditMovie() {
  const [imgSrc, setImgSrc] = useState("");
  const dangChieuSwich = useRef(null);
  const sapChieuSwich = useRef(null);
  const param = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const props = useSelector((state) => state.movieReducer);
  const DATE_FORMAT = "DD/MM/YYYY";
  const { movie } = props;

  // Fetch api lấy chi tiết phim
  useEffect(() => {
    dispatch(fetchMovie(param.id));
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maPhim: movie?.maPhim,
      tenPhim: movie?.tenPhim,
      trailer: movie?.trailer,
      moTa: movie?.moTa,
      maNhom: "GP06",
      ngayKhoiChieu: moment(movie?.ngayKhoiChieu).format("DD/MM/YYYY"),
      dangChieu: movie?.dangChieu,
      sapChieu: movie?.sapChieu,
      hot: movie?.hot,
      danhGia: movie?.danhGia,
      hinhAnh: null,
    },

    validationSchema: object({
      tenPhim: string().required("Vui lòng nhập tên phim"),

      trailer: string()
        .required("Vui lòng nhập link trailer")
        .url("Vui lòng nhập đúng đường link"),

      moTa: string().required("Vui lòng nhập mô tả"),

      ngayKhoiChieu: string().required("Vui lòng chọn ngày khởi chiếu"),

      danhGia: number()
        .required("Vui lòng nhập số sao")
        .min(1, "Vui lòng nhập từ 1-5 ")
        .max(5, "Vui lòng nhập từ 1-5 "),
    }),

    onSubmit: (values) => {
      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else if (values.hinhAnh) {
          formData.append("File", values.hinhAnh, values.hinhAnh.name);
        }
      }

      // call api
      api
        .post("QuanLyPhim/CapNhatPhimUpload", formData)
        .then((result) => {
          console.log(result);
          alert(result.data.message);
          navigate("/admin/movies");
        })
        .catch((error) => {
          alert(error.response.content);
        });
    },
  });

  const handleChangeDatePicker = (value) => {
    const ngayKhoiChieu = moment(value?.$d).format("DD/MM/YYYY");
    formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
  };

  const handleChangeSwitch = (name) => {
    return (value) => {
      // Thay đổi trạng thái switch
      if (name === "dangChieu") {
        sapChieuSwich.current.click();
      } else if (name === "sapChieu") {
        dangChieuSwich.current.click();
      }
      formik.setFieldValue([name], value);
    };
  };

  const handleChangeInputNumber = () => {
    return (value) => {
      console.log(value);
      formik.setFieldValue("danhGia", value);
    };
  };

  const handleChangeFile = (e) => {
    const file = e.target.files[0];

    // set value
    formik.setFieldValue("hinhAnh", file);

    // tạo đối tượng để đọc file và in hình ảnh ra giao diện
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setImgSrc(e.target.result);
    };
  };

  return (
    <>
      <h1 className="text-center text-4xl mb-5">Sửa phim</h1>
      <Form
        onSubmitCapture={formik.handleSubmit}
        validateMessages={formik.validateSchema}
        className="m-auto"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 20,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="Tên phim">
          <Input
            name="tenPhim"
            onChange={formik.handleChange}
            value={formik.values.tenPhim}
          />
          {formik.errors.tenPhim && formik.touched.tenPhim && (
            <Alert type="error" message={formik.errors.tenPhim} banner />
          )}
        </Form.Item>
        <Form.Item label="Trailer">
          <Input
            name="trailer"
            onChange={formik.handleChange}
            value={formik.values.trailer}
          />
          {formik.errors.trailer && formik.touched.trailer && (
            <Alert type="error" message={formik.errors.trailer} banner />
          )}
        </Form.Item>
        <Form.Item label="Mô tả">
          <TextArea
            rows={4}
            name="moTa"
            onChange={formik.handleChange}
            value={formik.values.moTa}
          />
          {formik.errors.moTa && formik.touched.moTa && (
            <Alert type="error" message={formik.errors.moTa} banner />
          )}
        </Form.Item>
        <Form.Item label="Ngày khởi chiếu">
          <DatePicker
            defaultValue={moment(formik.values.ngayKhoiChieu, DATE_FORMAT)}
            name="ngayKhoiChieu"
            format={DATE_FORMAT}
            onChange={handleChangeDatePicker}
          />
          {formik.errors.ngayKhoiChieu && formik.touched.ngayKhoiChieu && (
            <Alert type="error" message={formik.errors.ngayKhoiChieu} banner />
          )}
        </Form.Item>
        <Form.Item label="Đang chiếu" valuePropName="checked">
          <Switch
            checked={formik.values.dangChieu}
            ref={dangChieuSwich}
            onChange={handleChangeSwitch("dangChieu")}
          />
        </Form.Item>
        <Form.Item label="Sắp chiếu" valuePropName="checked">
          <Switch
            checked={formik.values.sapChieu}
            ref={sapChieuSwich}
            onChange={handleChangeSwitch("sapChieu")}
          />
        </Form.Item>
        <Form.Item label="Hot" valuePropName="checked">
          <Switch
            checked={formik.values.hot}
            onChange={handleChangeSwitch("hot")}
          />
        </Form.Item>
        <Form.Item label="Số sao">
          <InputNumber
            value={formik.values.danhGia}
            min={1}
            max={5}
            onChange={handleChangeInputNumber()}
          />
          {formik.errors.danhGia && formik.touched.danhGia && (
            <Alert type="error" message={formik.errors.danhGia} banner />
          )}
        </Form.Item>
        <Form.Item label="Hình ảnh" valuePropName="fileList">
          <input type="file" onChange={handleChangeFile} accept="image/*" />
          {formik.errors.hinhAnh && formik.touched.hinhAnh && (
            <Alert type="error" message={formik.errors.hinhAnh} banner />
          )}
          <img
            style={{
              width: 100,
            }}
            src={imgSrc === "" ? movie?.hinhAnh : imgSrc}
            alt="..."
          />
        </Form.Item>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white rounded py-2 px-4"
            type="submit"
          >
            Sửa phim
          </button>
        </div>
      </Form>
    </>
  );
}
