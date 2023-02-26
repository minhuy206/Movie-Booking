import React from "react";
import { Top3 } from "./Top3/Top3";
import { Top5 } from "./Top5Chart/Top5";
import "./Chart.css";

export const Chart = () => {
  return (
    <div
      className="m-auto max-w-7xl"
      style={{ height: "55vh", fontFamily: "'Viga', sans-serif" }}
    >
      <div className="flex justify-between">
        <div className="chartLeft">
          <h1 className="uppercase text-white text-4xl mb-5">
            Top Movies this week
          </h1>
          <Top3 />
        </div>
        <div className="chartRight">
          <h1 className="uppercase text-white text-4xl mb-5">Chart</h1>
          <Top5 />
        </div>
      </div>
    </div>
  );
};
