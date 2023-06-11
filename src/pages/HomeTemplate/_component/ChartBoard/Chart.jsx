import React from "react";
import { Top3 } from "./Top3/Top3";
import { Top5 } from "./Top5Chart/Top5";
import "./Chart.css";

export const Chart = ({ top5Movies }) => {
  return (
    <section className="chart pt-10 lg:pt-28">
      <div className="m-auto sm:w-5/6 w-11/12">
        <div className="flex gap-3">
          <div className="chartLeft lg:block hidden">
            <Top3 top5Movies={top5Movies} />
          </div>
          <div className="chartRight">
            <Top5 top5Movies={top5Movies} />
          </div>
        </div>
      </div>
    </section>
  );
};
