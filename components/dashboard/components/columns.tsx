"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Cycle } from "../../../lib/types";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const columns: ColumnDef<Cycle>[] = [
  {
    accessorKey: "fridge_id",
    header: "Fridge ID",
    filterFn: (row, column, filter) => {
      if (filter === "all") {
        return true;
      }
      return row.getValue(column) === filter;
    },
  },
  {
    accessorKey: "cooldown_number",
    header: "Cooldown Number",
  },
  {
    accessorKey: "cooldown_start",
    cell: ({ row }) => formatDate(row.getValue("cooldown_start")),
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Cooldown start
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "cooldown_end",
    header: "Cooldown End",
    cell: ({ row }) => formatDate(row.getValue("cooldown_end")),
  },
  {
    accessorKey: "warmup_start",
    header: "Warmup Start",
    cell: ({ row }) => formatDate(row.getValue("warmup_start")),
  },
  {
    accessorKey: "warmup_end",
    header: "Warmup End",
    cell: ({ row }) => formatDate(row.getValue("warmup_end")),
  },
];

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleString();
}
