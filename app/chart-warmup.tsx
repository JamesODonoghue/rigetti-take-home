"use client";

import React from "react";
import { CycleSummary } from "./utils/get-cycle-summaries";
import { CustomBarChart } from "@/components/ui/bar-chart";

interface ChartProps<TData> {
  data: TData[];
}
export function ChartWarmup({ data }: ChartProps<CycleSummary>) {
  return (
    <>
      <h1>Warmup time in hours</h1>
      <CustomBarChart data={data} dataKey="warmup" />
    </>
  );
}
