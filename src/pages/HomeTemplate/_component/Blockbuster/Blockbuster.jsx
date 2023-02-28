import React from "react";
import Slider from "react-slick";
import settings from "./slideSettings.json";
export default function Blockbuster({ hotMovies }) {
  console.log(hotMovies);

  const renderBlockbusterCard = () => {
    return hotMovies.map((movie) => {
      const sliderStyle = {
        height: "30vh",
        backgroundImage: `url(${movie.hinhAnh})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        position: "relative",
      };
      return (
        <div key={movie.maPhim}>
          <div style={sliderStyle} className="mr-2">
            <img className="w-full h-full" src={movie.hinhAnh} alt="" />
          </div>
        </div>
      );
    });
  };
  return (
    <section className="blockbuster">
      <div className="mx-auto sm:w-5/6 w-11/12" style={{ paddingTop: "115px" }}>
        <h1 className="uppercase text-white text-4xl mb-5">Blockbuster</h1>
        <Slider {...settings}>{renderBlockbusterCard()}</Slider>
      </div>
    </section>
  );
}
