"use client";
import React from "react";
import colors from "tailwindcss/colors";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { CycleSummary } from "@/lib/types";
interface ChartProps<TData> {
  data: TData[];
}

export function ChartPhaseSummary({ data }: ChartProps<CycleSummary>) {
  const COLORS = [
    colors.gray[100],
    colors.gray[300],
    colors.gray[400],
    colors.gray[500],
  ];

  const summariesReduced = data.reduce(
    (acc, { cooldown, cold, warmup, warm }) => {
      acc.cooldown += cooldown;
      acc.cold += cold;
      acc.warmup += warmup;
      acc.warm += warm ?? 0;
      return acc;
    },
    { cooldown: 0, cold: 0, warmup: 0, warm: 0 }
  );

  const chartData = Object.entries(summariesReduced).map(([key, value]) => {
    return {
      title: key,
      value,
    };
  });
  return (
    <>
      <div className="flex flex-col items-center w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={480} height={256}>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="title"
              cx="50%"
              cy="50%"
              outerRadius={144}
              label={({ percent, title }) =>
                `${title} ${(percent * 100).toFixed(0)}%`
              }
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
