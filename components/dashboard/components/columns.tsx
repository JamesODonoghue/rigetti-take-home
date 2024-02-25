"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Cycle } from "../../../lib/types";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

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
          Cooldown Start
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "cooldown_end",
    cell: ({ row }) => formatDate(row.getValue("cooldown_end")),
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Cooldown End
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "warmup_start",
    cell: ({ row }) => formatDate(row.getValue("warmup_start")),
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Warmup Start
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "warmup_end",
    cell: ({ row }) => formatDate(row.getValue("warmup_end")),
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Warmup End
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
];
