import { Button, Checkbox, Form, Input, Alert, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { login } from "./duck/action";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const props = useSelector((state) => state.loginReducer);

  const onFinish = (values) => {
    const user = {
      taikhoan: values.taiKhoan,
      matKhau: values.matKhau,
    };
    dispatch(login(user, navigate));
  };

  const renderNoti = () => {
    const { error } = props;
    return (
      error && (
        <Space
          direction="vertical"
          align="center"
          style={{ width: "100%" }}
          key="error"
        >
          <Alert message={error.response.data.content} type="error" banner />
        </Space>
      )
    );
  };

  if (localStorage.getItem("User")) {
    return <Navigate replace to="/admin" key="/admin" />;
  }

  return (
    <div>
      <h1 className="text-4xl text-center my-10">Đăng nhập</h1>
      {renderNoti()}
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 12,
        }}
        style={{
          maxWidth: 600,
          margin: "25px auto",
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Username"
          name="taiKhoan"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input name="username" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="matKhau"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password name="password" />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox name="remember">Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
