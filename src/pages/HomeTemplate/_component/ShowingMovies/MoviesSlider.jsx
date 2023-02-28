import React from "react";
import Slider from "react-slick";
import { Card } from "../MovieCard/MovieCard";
import settings from "./slideSettings.json";

export const MoviesSlider = ({ movies }) => {
  const renderMoviesCard = () => {
    return movies.map((movie) => {
      return <Card key={movie.maPhim} movie={movie} />;
    });
  };

  return (
    <section className="showingMovies">
      <div className="mx-auto sm:w-5/6 w-11/12" style={{ paddingTop: "115px" }}>
        <h1 className="uppercase text-white text-4xl mb-5">Now Showing</h1>
        <Slider {...settings}>{renderMoviesCard()}</Slider>
      </div>
    </section>
  );
};
