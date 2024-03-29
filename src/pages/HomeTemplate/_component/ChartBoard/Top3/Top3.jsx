import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import TrailerModal from "../../trailerModal/TrailerModal";
import "./Top3.css";

export const Top3 = ({ top5Movies }) => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [trailer, setTrailer] = useState(top5Movies[0].trailer);

  const setIsOpen = () => {
    setOpen(false);
  };

  const setIsOpen2 = () => {
    setOpen2(false);
  };

  return (
    <div className="top-3">
      <div>
        <h1 className="uppercase text-white text-4xl mb-5 ">
          Top Movies this week
        </h1>
      </div>
      <div className="top3Content md:flex justify-between h-full hidden gap-2">
        <div className="top1Item hidden rounded-2xl lg:block md:block w-2/5 overflow-hidden relative">
          <img
            src={top5Movies[0]?.hinhAnh}
            alt={top5Movies[0]?.tenPhim}
            className="h-full w-full object-cover object-center"
          />
          <div className="top1Score absolute text-center">
            <h6 className="text-white text-sm font-medium inline">
              {top5Movies[0]?.danhGia}
            </h6>
            <span className="text-primary text-xs">/10</span>
            <span>⭐️</span>
          </div>
          <div className="top3Overplay p-5 absolute h-5/12 w-full bottom-0 left-0">
            <h2 className="text-white relative top1 text-5xl xl:text-6xl inline-block">
              01
            </h2>
            <h2 className="uppercase text-white text-2xl mt-4">
              {top5Movies[0]?.tenPhim}
            </h2>
          </div>
          <div className="hoverOverplay opacity-0 absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <FontAwesomeIcon
              icon={faCirclePlay}
              size="6x"
              className="text-primary hover:opacity-50 transition duration-300 ease-in"
              onClick={() => {
                setOpen(true);
                setTrailer(top5Movies[0]?.trailer);
              }}
            />
          </div>
          <TrailerModal open={open} trailer={trailer} setIsOpen={setIsOpen} />
        </div>
        <div className="top23ItemContainer flex-1 flex flex-col gap-2">
          {top5Movies.map((movie, index) => {
            if (index === 1 || index === 2) {
              return (
                <div
                  className="rounded-2xl top3Item overflow-hidden relative h-1/2"
                  key={index}
                >
                  <img
                    src={movie?.hinhAnh}
                    alt={movie?.tenPhim}
                    className="h-full w-full"
                  />
                  <div className="top3Score absolute text-center">
                    <h6 className="text-white text-sm font-medium inline">
                      {movie?.danhGia}
                    </h6>
                    <span className="text-primary text-xs">/10</span>
                    <span>⭐️</span>
                  </div>
                  <div className="top3Overplay h-1/3 p-5 flex items-center absolute w-full bottom-0 left-0">
                    <h2 className="text-white relative text-4xl xl:text-5xl inline-block top3 mr-5">
                      03
                    </h2>
                    <h2 className="uppercase text-white text-xl xl:text-2xl">
                      {movie?.tenPhim}
                    </h2>
                  </div>
                  <div className="hoverOverplay opacity-0 absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <FontAwesomeIcon
                      icon={faCirclePlay}
                      size="6x"
                      className="text-primary hover:opacity-50 transition duration-300 ease-in"
                      onClick={() => {
                        setOpen2(true);
                        setTrailer(movie?.trailer);
                      }}
                    />
                  </div>
                  <TrailerModal
                    open={open2}
                    trailer={trailer}
                    setIsOpen={setIsOpen2}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};
