"use client";

import { ChartPhaseSummary } from "@/components/dashboard/components/chart-phase-summary";
import { columns } from "@/components/dashboard/components/columns";
import { DataTable } from "@/components/dashboard/components/data-table";
import { CustomBarChart } from "../ui/bar-chart";
import { getCycleSummaries } from "@/components/dashboard/lib/get-cycle-summaries";
import { Cycle } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function Dashboard({ data }: { data: Cycle[] }) {
  const cycleSummaries = getCycleSummaries(data);

  return (
    <div className="flex flex-col gap-12 container mx-auto py-10">
      <h1 className="text-4xl font-bold">QPU Cycle Dashboard</h1>
      <DataTable columns={columns} data={data} />
      <div className="flex flex-col gap-12">
        <Card>
          <CardHeader>
            <CardTitle>Cooldown time in hours</CardTitle>
          </CardHeader>
          <CardContent className="h-96">
            <CustomBarChart data={cycleSummaries} dataKey="cooldown" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Cold time in hours</CardTitle>
          </CardHeader>
          <CardContent className="h-96">
            <CustomBarChart data={cycleSummaries} dataKey="cold" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Warmup time in hours</CardTitle>
          </CardHeader>
          <CardContent className="h-96">
            <CustomBarChart data={cycleSummaries} dataKey="warmup" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Warm time in hours</CardTitle>
          </CardHeader>
          <CardContent className="h-96">
            <CustomBarChart data={cycleSummaries} dataKey="warm" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Cycle Phase Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartPhaseSummary data={cycleSummaries}></ChartPhaseSummary>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
