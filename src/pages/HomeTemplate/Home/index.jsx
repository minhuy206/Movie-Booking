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
