import { CustomBarChart } from "@/components/ui/bar-chart";
import { ChartCold } from "./chart-cold";
import { ChartCooldown } from "./chart-cooldown";
import { ChartPhaseSummary } from "./chart-phase-summary";
import { ChartSummary } from "./chart-summary";
import { ChartWarm } from "./chart-warm";
import { ChartWarmup } from "./chart-warmup";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Cycle, CycleApi } from "./types/types";
import { getCycleSummaries } from "./utils/get-cycle-summaries";

const url =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:5328"
    : `https://${process.env.NEXT_PUBLIC_FUNCTIONS_BASE_URL}`;

async function getData(): Promise<Cycle[]> {
  const data = await fetch(`${url}/api/data`);
  const json: CycleApi[] = await data.json();
  return json.map((item) => {
    return {
      ...item,
      fridge_id: parseInt(item.fridge_id),
      cooldown_number: parseInt(item.cooldown_number),
    };
  });
}

export default async function DemoPage() {
  const data = await getData();
  const cycleSummaries = getCycleSummaries(data);
  return (
    <div className="flex flex-col gap-12 container mx-auto py-10">
      <h1 className="text-4xl font-bold">Cycle Phase Dashboard</h1>
      <DataTable columns={columns} data={data} />
      <div className="flex flex-col gap-12">
        <div className="flex-auto w-full h-96">
          <ChartCooldown data={cycleSummaries}></ChartCooldown>
        </div>
        <div className="flex-auto w-full h-96">
          <ChartCold data={cycleSummaries}></ChartCold>
        </div>
        <div className="flex-auto w-full h-96">
          <ChartWarmup data={cycleSummaries}></ChartWarmup>
        </div>
        <div className="flex-auto w-full h-96">
          <ChartWarm data={cycleSummaries}></ChartWarm>
        </div>
        <div className="flex-auto w-full h-96">
          <ChartPhaseSummary data={cycleSummaries}></ChartPhaseSummary>
        </div>
      </div>
    </div>
  );
}
