import React, { useEffect } from "react";
import { Chart } from "../_component/ChartBoard/Chart";
import { Carousel } from "../_component/Carousel/Carousel";
import { MoviesSlider } from "../_component/ShowingMovies/MoviesSlider";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./duck/action";
import Blockbuster from "../_component/Blockbuster/Blockbuster";

function Home() {
  const dispatch = useDispatch();
  const { movies, sliders } = useSelector((state) => state.homeReducer);
  useEffect(() => {
    localStorage.setItem("User", {
  accessToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoibWluaHV5MjA2IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoidm9taW5oaHV5MDkxMUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiS2hhY2hIYW5nIiwidm9taW5oaHV5MDkxMUBnbWFpbC5jb20iLCJHUDAwIl0sIm5iZiI6MTY4NjQ2MzI0NCwiZXhwIjoxNjg2NDY2ODQ0fQ.Vk9lFkflT2B3sKDxGgga78PvQ6MjOocAwgsPo_YnOIs",
  email: "vominhhuy0911@gmail.com",
  hoTen: "Huy",
  maLoaiNguoiDung: "KhachHang",
  maNhom: "GP00",
  soDT: "0123456789",
  taiKhoan: "minhuy206",
});
    dispatch(fetchMovies());
  }, []);
  const sortMovieByScore = () => {
    let sortedMovies = [...movies];
    return sortedMovies.sort((a, b) => b.danhGia - a.danhGia).slice(0, 5);
  };

  const filterHotMovies = () => {
    return movies.filter((movie) => (movie.hot = true));
  };

  return (
    <>
      <>
        <Carousel sliders={sliders} />
        {/* <Carousel sliders={sliders} /> */}
      </>
      <>
        <Blockbuster hotMovies={filterHotMovies()} />
      </>
      <>
        <Chart top5Movies={sortMovieByScore()} />
      </>
      <>
        <MoviesSlider movies={movies} />
      </>
    </>
  );
}

export default Home;
