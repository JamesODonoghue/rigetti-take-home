import { Cycle, CycleSummary } from "@/lib/types";
import { getDifferenceInHours } from "./get-diff-in-hours";

export const getCycleSummaries = (data: Cycle[]): CycleSummary[] => {
  return data.map((cycle, index) => {
    const {
      fridge_id,
      cooldown_start,
      cooldown_end,
      warmup_start,
      warmup_end,
    } = cycle;
    const nextCycle = data[index + 1];
    return {
      cycleNumber: index,
      fridgeId: fridge_id,
      cooldown: getDifferenceInHours({
        end: cooldown_end,
        start: cooldown_start,
      }),
      cold: getDifferenceInHours({
        end: warmup_start,
        start: cooldown_end,
      }),
      warmup: getDifferenceInHours({
        end: warmup_end,
        start: warmup_start,
      }),
      warm:
        !nextCycle || nextCycle.fridge_id !== fridge_id
          ? null
          : getDifferenceInHours({
              end: data[index + 1].cooldown_start,
              start: warmup_end,
            }),
    };
  });
};
