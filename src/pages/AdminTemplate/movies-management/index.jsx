import { Table, Tag, Input, Space, Button, ConfigProvider } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import React, {
  Fragment,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./duck/action";
import api from "utils/apiUtils";
const { Search } = Input;

function Movies() {
  const dispatch = useDispatch();
  const props = useSelector((state) => state.moviesReducer);
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);
  const { data } = props;

  const searchedData = data?.filter(
    (movie) => movie.tenPhim.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
  );
  const deleteMovie = (id) => {
    api
      .delete(`QuanLyPhim/XP?MaPhim=${id}`)
      .then((result) => {
        dispatch(fetchMovies());
      })
      .catch((error) => console.log(error));
  };

  const columns = [
    {
      title: "Mã phim",
      dataIndex: "maPhim",
      key: "maPhim",
      width: "100px",
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      width: "100px",
      render: (src) => <img src={src} alt={src} width="50px" key={src} />,
    },
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      key: "tenPhim",
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      key: "moTa",
      ellipsis: true,
    },

    {
      title: "Tình trạng",
      key: "tinhTrang",
      dataIndex: "dangChieu",
      render: (dangChieu, _, index) => {
        let color = "green";
        if (!dangChieu) {
          color = "geekblue";
        }
        return (
          <Tag color={color} key={index}>
            {dangChieu ? "Đang chiếu" : "Sắp chiếu"}
          </Tag>
        );
      },
    },
    {
      title: "Hành động",
      key: "hanhDong",
      render: (_, movie) => {
        return (
          <Fragment>
            <Button type="link" key="editMovieBtn">
              <NavLink
                className="text-xl"
                key="editMovie"
                to={`edit/${movie.maPhim}`}
              >
                <EditOutlined />
              </NavLink>
            </Button>
            <ConfigProvider
              theme={{
                token: {
                  colorLink: "#00b96b",
                  colorLinkHover: "#9bdcb5",
                },
              }}
            >
              <Button type="link" key="addShowtimeBtn">
                <NavLink
                  className="text-xl"
                  key="addShowtime"
                  to={`showtime/${movie.maPhim}`}
                >
                  <CalendarOutlined />
                </NavLink>
              </Button>
            </ConfigProvider>
            <Button type="link" danger key="deleteMovieBtn">
              <NavLink
                className="text-xl"
                key="deleteMovie"
                onClick={() => deleteMovie(movie.maPhim)}
              >
                <DeleteOutlined />
              </NavLink>
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const columnsMemo = useMemo(() => columns, []);

  return (
    <>
      <h1 className="text-center text-4xl mb-5">Quản lí phim</h1>
      <Space className="site-button-ghost-wrapper mb-5" wrap>
        <Button
          type="primary"
          ghost
          onClick={() => {
            navigate("addnew");
          }}
        >
          Thêm phim
        </Button>
      </Space>
      <Search
        className="mb-5"
        placeholder="Tìm kiếm tên phim"
        size="large"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Table
        columns={columnsMemo}
        dataSource={keyword ? searchedData : data}
        pagination={{
          defaultPageSize: 5,
        }}
      />
    </>
  );
}
export default Movies;
