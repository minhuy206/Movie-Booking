import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import Detail from "../_component/DetailMovie/DetailMovie";
import { fetchMovie } from "./duck/action";
import movieBanner from "../../../assets/movieBanner.jpeg";

export default function DetailMovie() {
  const dispatch = useDispatch();
  const { movie } = useSelector((state) => state.detailMovieReducer);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchMovie(id));
  }, []);

  const sliderStyle = {
    height: "60vh",
    backgroundImage: `url(${movieBanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    width: "100%",
  };
  return (
    <>
      <>
        <section className="movieBanner hidden md:block z-0">
          <div style={sliderStyle}></div>
        </section>
      </>
      <>
        <Detail movie={movie} />
      </>
      <></>
    </>
  );
}
