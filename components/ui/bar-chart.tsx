import { CycleSummary } from "@/app/utils/get-cycle-summaries";
import {
  ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
} from "recharts";

interface BarChartProps<TData> {
  data: TData[];
  dataKey: string;
}
export function CustomBarChart({ data, dataKey }: BarChartProps<CycleSummary>) {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} width={500} height={300}>
          <Bar
            dataKey={dataKey}
            fill="white"
            style={
              {
                fill: "hsl(var(--foreground))",
                opacity: 1,
              } as React.CSSProperties
            }
          />
          <XAxis dataKey="cycleNumber" />
          <YAxis domain={["dataMin", "dataMax"]} />
          <Tooltip
            wrapperStyle={{
              background: "hsl(var(--background))",
              borderRadius: "4px",
            }}
            contentStyle={{
              background: "hsl(var(--background))",
              border: "1px solid hsl(var(--background))",
              borderRadius: "4px",
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
