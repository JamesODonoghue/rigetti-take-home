"use client";

import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { CycleSummary } from "./utils/get-cycle-summaries";

interface ChartProps<TData> {
  data: TData[];
}

const colorMap: Record<string, string> = {
  cooldown: "lightblue",
  cold: "blue",
  warmup: "orange",
  warm: "red",
  total: "green",
};

export function ChartSummary({ data }: ChartProps<CycleSummary>) {
  const summariesReduced = data.reduce(
    (acc, { cooldown, cold, warmup, warm }) => {
      acc.cooldown += cooldown;
      acc.cold += cold;
      acc.warmup += warmup;
      acc.warm += warm;
      return acc;
    },
    { cooldown: 0, cold: 0, warmup: 0, warm: 0 }
  );

  const chartData = Object.entries(summariesReduced).map(([key, value]) => {
    return {
      title: key,
      value,
      color: colorMap[key],
    };
  });
  return (
    <div style={{ height: "24rem" }}>
      <h1>Cycle Summary</h1>
      <PieChart
        style={{ fontSize: "6px" }}
        data={chartData}
        label={({ dataEntry }) =>
          `${dataEntry.title} ${Math.floor(dataEntry.percentage)}`
        }
      />
    </div>
  );
}
