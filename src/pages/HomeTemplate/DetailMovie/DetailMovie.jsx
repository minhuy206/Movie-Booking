import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Detail from "../_component/DetailMovie/DetailMovie";
import { fetchMovie } from "./duck/action";

export default function DetailMovie() {
  const dispatch = useDispatch();
  const { movie } = useSelector((state) => state.detailMovieReducer);
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchMovie(id));
  }, []);
  console.log(movie);
  return (
    <>
      <>
        <Detail movie={movie} />
      </>
      <>
        <div></div>
      </>
    </>
  );
}
