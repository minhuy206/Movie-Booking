import { Chart } from "./Chart";
import React from "react";

export default {
  title: "components/ChartBoard",
  component: Chart,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

export const MovieChart = () => <Chart />;
