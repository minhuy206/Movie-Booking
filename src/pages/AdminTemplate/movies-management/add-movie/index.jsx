import { DatePicker, Form, Input, InputNumber, Switch, Alert } from "antd";
import React, { useRef, useState } from "react";
import { object, string, number, Schema } from "yup";
import { useFormik } from "formik";
import moment from "moment";
import api from "utils/apiUtils";
const { TextArea } = Input;

export default function AddMovie() {
  const [imgSrc, setImgSrc] = useState(null);
  const dangChieuSwich = useRef(null);
  const sapChieuSwich = useRef(null);
  const imgContainer = useRef(null);

  const formik = useFormik({
    initialValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      maNhom: "GP06",
      ngayKhoiChieu: "",
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: null,
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
      hinhAnh: string().required("Vui lòng nhập file hình ảnh"),
    }),
    onSubmit: (values) => {
      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else formData.append("File", values.hinhAnh, values.hinhAnh.name);
      }

      // call api
      api
        .post("QuanLyPhim/ThemPhimUploadHinh", formData)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
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
      } else {
        dangChieuSwich.current.click();
      }
      formik.setFieldValue([name], value);
    };
  };

  const handleChangeInputNumber = () => {
    return (value) => {
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

    imgContainer.current.className = "";
  };

  return (
    <>
      <h1 className="text-center text-4xl mb-5">Thêm mới phim</h1>
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
          <Input name="tenPhim" onChange={formik.handleChange} />
          {formik.errors.tenPhim && formik.touched.tenPhim && (
            <Alert type="error" message={formik.errors.tenPhim} banner />
          )}
        </Form.Item>
        <Form.Item label="Trailer">
          <Input name="trailer" onChange={formik.handleChange} />
          {formik.errors.trailer && formik.touched.trailer && (
            <Alert type="error" message={formik.errors.trailer} banner />
          )}
        </Form.Item>
        <Form.Item label="Mô tả">
          <TextArea rows={4} name="moTa" onChange={formik.handleChange} />
          {formik.errors.moTa && formik.touched.moTa && (
            <Alert type="error" message={formik.errors.moTa} banner />
          )}
        </Form.Item>
        <Form.Item label="Ngày khởi chiếu">
          <DatePicker
            name="ngayKhoiChieu"
            format={"DD/MM/YYYY"}
            onChange={handleChangeDatePicker}
          />
          {formik.errors.ngayKhoiChieu && formik.touched.ngayKhoiChieu && (
            <Alert type="error" message={formik.errors.ngayKhoiChieu} banner />
          )}
        </Form.Item>
        <Form.Item label="Đang chiếu" valuePropName="checked">
          <Switch
            defaultChecked={true}
            ref={dangChieuSwich}
            onChange={handleChangeSwitch("dangChieu")}
          />
        </Form.Item>
        <Form.Item label="Sắp chiếu" valuePropName="checked">
          <Switch
            ref={sapChieuSwich}
            onChange={handleChangeSwitch("sapChieu")}
          />
        </Form.Item>
        <Form.Item label="Hot" valuePropName="checked">
          <Switch onChange={handleChangeSwitch("hot")} />
        </Form.Item>
        <Form.Item label="Số sao">
          <InputNumber
            min={1}
            max={10}
            onChange={handleChangeInputNumber("danhGia")}
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
            className="hidden"
            ref={imgContainer}
            style={{
              width: 100,
            }}
            src={imgSrc}
            alt="..."
          />
        </Form.Item>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white rounded py-2 px-4"
            type="submit"
          >
            Thêm phim
          </button>
        </div>
      </Form>
    </>
  );
}
