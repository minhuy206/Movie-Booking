import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Top3.css";

export const Top3 = ({ top5Movies }) => {
  return (
    <div className="top-3">
      <div className="top3Title">
        <h1 className="uppercase text-white text-4xl mb-5">
          Top Movies this week
        </h1>
      </div>
      <div className="top3Content md:flex justify-between h-full hidden">
        <div className="hidden rounded-2xl lg:block md:block top1Item">
          <img
            src={top5Movies[0].hinhAnh}
            alt={top5Movies[0].alt}
            className="h-full w-full object-cover object-center"
          />
          <div className="top1Score absolute text-center">
            <h6 className="text-white text-sm font-medium inline">
              {top5Movies[0].danhGia}
            </h6>
            <span className="text-primary text-xs">/10</span>
            <span>⭐️</span>
          </div>
          <div className="p-5 top3Overplay h-5/12">
            <h2 className="text-white relative top1 text-5xl xl:text-6xl inline-block">
              01
            </h2>
            <h2 className="uppercase text-white text-2xl mt-4">
              {top5Movies[0].tenPhim}
            </h2>
          </div>
          <div className="hoverOverplay">
            <FontAwesomeIcon
              icon={faCirclePlay}
              size="6x"
              className="text-primary hover:opacity-50 transition duration-300 ease-in"
            />
          </div>
        </div>
        <div className="top23ItemContainer">
          <div className="rounded-2xl top2Item">
            <img
              src={top5Movies[1].hinhAnh}
              alt={top5Movies[1].alt}
              className="h-full w-full"
            />
            <div className="top2Score">
              <h6 className="text-white text-sm font-medium inline">
                {top5Movies[1].danhGia}
              </h6>
              <span className="text-primary text-xs">/10</span>
              <span>⭐️</span>
            </div>
            <div className="top3Overplay h-1/3 p-5 flex items-center">
              <h2 className="text-white relative text-4xl xl:text-5xl inline-block top2 mr-5">
                02
              </h2>
              <h2 className="uppercase text-white text-xl xl:text-2xl">
                {top5Movies[1].tenPhim}
              </h2>
            </div>
            <div
              className="hoverOverplay"
              onClick={() => {
                console.log(123);
              }}
            >
              <FontAwesomeIcon
                icon={faCirclePlay}
                size="6x"
                className="text-primary hover:opacity-50 transition duration-300 ease-in"
              />
            </div>
          </div>
          <div className="rounded-2xl top3Item">
            <img
              src={top5Movies[2].hinhAnh}
              alt={top5Movies[2].alt}
              className="h-full w-full"
            />
            <div className="top3Score absolute text-center">
              <h6 className="text-white text-sm font-medium inline">
                {top5Movies[2].danhGia}
              </h6>
              <span className="text-primary text-xs">/10</span>
              <span>⭐️</span>
            </div>
            <div className="top3Overplay h-1/3 p-5 flex items-center">
              <h2 className="text-white relative text-4xl xl:text-5xl inline-block top3 mr-5">
                03
              </h2>
              <h2 className="uppercase text-white text-xl xl:text-2xl">
                {top5Movies[2].tenPhim}
              </h2>
            </div>
            <div className="hoverOverplay">
              <FontAwesomeIcon
                icon={faCirclePlay}
                size="6x"
                className="text-primary hover:opacity-50 transition duration-300 ease-in"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
