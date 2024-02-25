import Dashboard from "@/components/dashboard/dashboard";
import { Cycle } from "../lib/types";
export const dynamic = "force-dynamic";
const url =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:5328"
    : `http://${process.env.VERCEL_URL}`;

async function getFridgeCycleData(): Promise<Cycle[]> {
  const data = await fetch(`${url}/api/data`);
  const json = await data.json();
  return json;
}

export default async function Home() {
  const data = await getFridgeCycleData();
  return <Dashboard data={data} />;
}
