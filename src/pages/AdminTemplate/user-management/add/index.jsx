import { Form, Input, Select, Alert } from "antd";
import { useFormik } from "formik";
import api from "utils/apiUtils";
import { object, string } from "yup";

export default function AddUser() {
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDT: "",
      maLoaiNguoiDung: "QuanTri",
      maNhom: "GP06",
    },
    validationSchema: object({
      taiKhoan: string()
        .min(4, "Vui lòng nhập tài khoản từ 4 tới 8 ký tự")
        .max(8, "Vui lòng nhập tài khoản từ 4 tới 8 ký tự")
        .required("Vui lòng nhập tài khoản"),
      matKhau: string()
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/,
          "Vui lòng nhập mật Khẩu từ 6-10 ký tự chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt"
        )
        .required("Vui lòng nhập mật khẩu"),
      hoTen: string()
        .matches(
          /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$/,
          "Vui lòng nhập họ và tên không có ký tự số"
        )
        .required("Vui lòng nhập họ và tên"),
      email: string()
        .email("Vui lòng nhập đúng định dạng email")
        .required("Vui lòng nhập email"),
      soDT: string()
        .matches(
          /^([0][0-9]{9})$/,
          "Vui lòng nhập đúng định dạng số điện thoại"
        )
        .required("Vui lòng nhập số điện thoại"),
    }),
    onSubmit: (values) => {
      api
        .post("QuanLyNguoiDung/ThemNguoiDung", values)
        .then((result) => {
          alert(result.data.message);
        })
        .catch((error) => {
          // console.log(error.response.data.content);
          // formik.errors.taiKhoan = error.response.data.content;
          // formik.touched.taiKhoan = true;
          alert(error.response.data.content);
        });
    },
  });

  const handleSelect = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  return (
    <>
      <h1 className="text-center text-4xl mb-5">Thêm người dùng</h1>
      <Form
        onSubmitCapture={formik.handleSubmit}
        validateMessages={formik.validationSchema}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 18,
        }}
        layout="horizontal"
        style={{
          margin: "auto",
          maxWidth: 600,
        }}
      >
        <Form.Item label="Tài khoản">
          <Input name="taiKhoan" onChange={formik.handleChange} />
          {formik.errors.taiKhoan && formik.touched.taiKhoan && (
            <Alert type="error" message={formik.errors.taiKhoan} banner />
          )}
        </Form.Item>
        <Form.Item label="Mật khẩu">
          <Input
            type="password"
            name="matKhau"
            onChange={formik.handleChange}
          />
          {formik.errors.matKhau && formik.touched.matKhau && (
            <Alert type="error" message={formik.errors.matKhau} banner />
          )}
        </Form.Item>
        <Form.Item label="Họ và tên">
          <Input name="hoTen" onChange={formik.handleChange} />
          {formik.errors.hoTen && formik.touched.hoTen && (
            <Alert type="error" message={formik.errors.hoTen} banner />
          )}
        </Form.Item>
        <Form.Item label="Email">
          <Input type="email" name="email" onChange={formik.handleChange} />
          {formik.errors.email && formik.touched.email && (
            <Alert type="error" message={formik.errors.email} banner />
          )}
        </Form.Item>
        <Form.Item label="Số điện thoại">
          <Input name="soDT" onChange={formik.handleChange} />
          {formik.errors.soDT && formik.touched.soDT && (
            <Alert type="error" message={formik.errors.soDT} banner />
          )}
        </Form.Item>
        <Form.Item label="Select">
          <Select
            onChange={() => {
              handleSelect("maLoaiNguoiDung");
            }}
            defaultValue="QuanTri"
          >
            <Select.Option value="QuanTri">Quản trị</Select.Option>
            <Select.Option value="KhachHang">Khách hàng</Select.Option>
          </Select>
        </Form.Item>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white rounded py-2 px-4"
            type="submit"
          >
            Thêm người dùng
          </button>
        </div>
      </Form>
    </>
  );
}
