import { CycleSummary } from "@/components/dashboard/lib/get-cycle-summaries";
import {
  ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Rectangle,
} from "recharts";
import colors from "tailwindcss/colors";

interface BarChartProps<TData> {
  data: TData[];
  dataKey: string;
}
export function CustomBarChart({ data, dataKey }: BarChartProps<CycleSummary>) {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} width={500} height={300}>
          <XAxis dataKey="cycleNumber" />
          <YAxis domain={["auto", "auto"]} />
          <Tooltip
            cursor={false}
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
          <Bar
            dataKey={dataKey}
            fill="hsl(var(--foreground))"
            activeBar={<Rectangle fill={colors.gray[400]} />}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
