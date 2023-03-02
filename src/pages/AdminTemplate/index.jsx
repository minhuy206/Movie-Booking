import {
  UserOutlined,
  VideoCameraAddOutlined,
  PoweroffOutlined,
  UserAddOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Avatar } from "antd";
import SubMenu from "antd/es/menu/SubMenu";
import React, { useEffect } from "react";
import { Navigate, NavLink, Outlet } from "react-router-dom";

const { Sider, Content, Footer } = Layout;

const AdminTemplate = () => {
  useEffect(() => {
    console.log("Mounting");
    return () => {
      console.log("Clear ss");
    };
  }, []);

  let username = "";
  if (!localStorage.getItem("User")) {
    return <Navigate replace to="/login" key="/login" />;
  } else {
    username = JSON.parse(localStorage.getItem("User")).taiKhoan;
  }
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        theme="dark"
        style={{
          margin: "auto 20px auto 20px",
          overflow: "auto",
          height: "95vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            height: 32,
            margin: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Avatar size={40}>{username.charAt(0)}</Avatar>
          <span style={{ color: "#fff" }}>{username}</span>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <SubMenu
            key="sub1"
            icon={<VideoCameraOutlined />}
            title="Quản lý người dùng"
          >
            <Menu.Item key="users" icon={<UserOutlined />}>
              <NavLink to="users">Danh sách người dùng</NavLink>
            </Menu.Item>
            <Menu.Item key="users/addnew" icon={<UserAddOutlined />}>
              <NavLink to="users/addnew">Thêm người dùng</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            icon={<VideoCameraOutlined />}
            title="Quản lý phim"
          >
            <Menu.Item key="movies" icon={<VideoCameraOutlined />}>
              <NavLink to="movies">Danh sách phim</NavLink>
            </Menu.Item>
            <Menu.Item key="addnew" icon={<VideoCameraAddOutlined />}>
              <NavLink to="movies/addnew">Thêm phim</NavLink>
            </Menu.Item>
          </SubMenu>

          <Menu.Item key="logout" icon={<PoweroffOutlined />}>
            <NavLink
              onClick={() => {
                localStorage.removeItem("User");
              }}
              to="/login"
            >
              Log out
            </NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 240 }}>
        <Content
          style={{
            marginTop: "24px",
            overflow: "initial",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: "90vh",
              borderRadius: "20px",
              backgroundColor: "#fff",
            }}
          >
            <Outlet />
          </div>
        </Content>

        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Powered by minhuy206
        </Footer>
      </Layout>
    </Layout>
  );
};
export default AdminTemplate;
