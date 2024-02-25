"use client";

import React from "react";
import { AxisOptions, Chart } from "react-charts";
import { CycleSummary } from "./utils/get-cycle-summaries";
import { CustomBarChart } from "@/components/ui/bar-chart";

interface ChartProps<TData> {
  data: TData[];
}
export function ChartCold({ data }: ChartProps<CycleSummary>) {
  const chartData = [
    {
      label: "Cold Time in hours",
      data,
    },
  ];

  const primaryAxis = React.useMemo(
    (): AxisOptions<CycleSummary> => ({
      getValue: (datum) => datum.cycleNumber,
    }),
    []
  );

  const secondaryAxes = React.useMemo(
    (): AxisOptions<CycleSummary>[] => [
      {
        getValue: (datum) => datum.cold,
        // elementType: "bar",
      },
    ],
    []
  );
  return (
    <>
      <h1>Cold time in hours</h1>
      <CustomBarChart data={data} dataKey="cold" />
    </>
  );
}
