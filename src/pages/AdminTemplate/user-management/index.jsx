import { Table, Tag, Input, Space, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import React, { Fragment, useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./duck/action";
import api from "utils/apiUtils";
const { Search } = Input;

function Users() {
  const dispatch = useDispatch();
  const props = useSelector((state) => state.userReducer);
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const { users } = props;

  // call api lấy danh sách người dùng
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const searchedUsers = users?.filter(
    (user) => user.hoTen.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
  );

  const deleteUsers = (taiKhoan) => {
    api
      .delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
      .then((result) => {
        alert(result.data.message);
        dispatch(fetchUsers());
      })
      .catch((error) => console.log(error));
  };

  const columns = [
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
      width: "100px",
    },
    {
      title: "Mật khẩu",
      dataIndex: "matKhau",
      key: "matKhau",
      width: "100px",
    },
    {
      title: "Họ và tên",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDT",
      key: "soDT",
    },
    {
      title: "Loại người dùng",
      key: "maLoaiNguoiDung",
      dataIndex: "maLoaiNguoiDung",
      render: (maLoaiNguoiDung, _, index) => {
        let color = "green";
        let text = "Khách hàng";
        if (maLoaiNguoiDung === "QuanTri") {
          color = "geekblue";
          text = "Quản trị";
        }
        return (
          <Tag color={color} key={index}>
            {text}
          </Tag>
        );
      },
    },
    {
      title: "Hành động",
      key: "hanhDong",
      render: (_, user) => {
        return (
          <Fragment>
            <Button
              key="editUserBtn"
              type="link"
              icon={
                <EditOutlined
                  style={{ color: "blue" }}
                  onClick={() => {
                    navigate(`edit/${user.taiKhoan}`);
                  }}
                />
              }
            ></Button>
            <Button
              key="deleteUserBtn"
              type="link"
              danger
              onClick={() => deleteUsers(user.taiKhoan)}
              icon={<DeleteOutlined style={{ color: "red" }} />}
            ></Button>
          </Fragment>
        );
      },
    },
  ];

  const columnsMemo = useMemo(() => columns, []);

  return (
    <>
      <h1 className="text-center text-4xl mb-5">Quản lí người dùng</h1>
      <Space className="site-button-ghost-wrapper mb-5" wrap>
        <Button
          type="primary"
          ghost
          onClick={() => {
            navigate("addnew");
          }}
        >
          Thêm người dùng
        </Button>
      </Space>
      <Search
        className="mb-5"
        placeholder="Tìm kiếm họ tên"
        size="large"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Table
        columns={columnsMemo}
        dataSource={keyword ? searchedUsers : users}
        pagination={{
          defaultPageSize: 7,
        }}
      />
    </>
  );
}
export default Users;
