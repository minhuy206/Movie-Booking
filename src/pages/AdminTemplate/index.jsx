import {
  UserOutlined,
  VideoCameraAddOutlined,
  PoweroffOutlined,
  CalendarOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Avatar } from "antd";
import SubMenu from "antd/es/menu/SubMenu";
import React from "react";
import { Navigate, NavLink, Outlet } from "react-router-dom";

const { Sider, Content, Footer } = Layout;

const AdminTemplate = () => {
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
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        theme="light"
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
        key="sider"
      >
        <div
          style={{
            height: 32,
            margin: 24,
            background: "rgba(255, 255, 255, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Avatar size={40}>{username.charAt(0)}</Avatar>
          <span>{username}</span>
        </div>
        <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="users" icon={<UserOutlined />}>
            <NavLink to="users">User</NavLink>
          </Menu.Item>
          <SubMenu
            key="sub1"
            icon={<VideoCameraOutlined />}
            title="Movies management"
          >
            <Menu.Item key="movies" icon={<VideoCameraOutlined />}>
              <NavLink to="movies">Movies</NavLink>
            </Menu.Item>
            <Menu.Item key="addnew" icon={<VideoCameraAddOutlined />}>
              <NavLink to="movies/addnew">Add new film</NavLink>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="showtime" icon={<CalendarOutlined />}>
            <NavLink>Showtime</NavLink>
          </Menu.Item>
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
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        >
          <div
            style={{
              padding: 24,
              minheight: "90vh",

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
