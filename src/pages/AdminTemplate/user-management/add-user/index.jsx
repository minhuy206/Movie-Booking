import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  Form,
  Input,
  InputNumber,
  Select,
  TreeSelect,
  Upload,
} from "antd";

export default function AddUser() {
  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="Input">
          <Input />
        </Form.Item>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="InputNumber">
          <InputNumber />
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
