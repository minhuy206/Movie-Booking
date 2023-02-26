import React from "react";
import { Chart } from "../ChartBoard/Chart";
import { Carousel } from "../_component/Carousel/Carousel";
import "./index.css";

function Home() {
  return (
    <>
      <section className="carousel">
        <Carousel />
      </section>
      <section className="chart">
        <Chart />
      </section>
    </>
  );
}

export default Home;
