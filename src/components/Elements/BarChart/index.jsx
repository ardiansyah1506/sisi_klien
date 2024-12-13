/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { colors } from "@mui/material";
import { ThemeContext } from "../../../context/ThemeContext";

const chartSetting = {
  width: 600,
  height: 300,
};

export default function BarsDataset(props) {
  const { desc } = props;

  const { theme } = useContext(ThemeContext);
  desc.series[1].color = theme.color;
  return (
    <BarChart
      dataset={desc.data}
      xAxis={[{ scaleType: "band", dataKey: desc.dataKey }]}
      series={desc.series}
      {...chartSetting}
    />
  );
}
