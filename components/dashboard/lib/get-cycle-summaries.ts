import { Cycle } from "../../../lib/types";

export const getCooldownTime = ({ item }: { item: Cycle }) => {
  return new Date(
    +new Date(item.cooldown_end) - +new Date(item.cooldown_start)
  ).getMinutes();
};

const getDifferenceInHours = ({
  start,
  end,
}: {
  start: string;
  end: string;
}) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const timeInHours = (+endDate - +startDate) / 1000 / 60 / 60;
  const timeInHoursRounded = +timeInHours.toFixed(2);
  return timeInHoursRounded;
};

export interface CycleSummary {
  cycleNumber: number;
  cooldown: number;
  cold: number;
  warmup: number;
  warm: number;
}
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
      warm: !nextCycle
        ? 0
        : nextCycle.fridge_id !== fridge_id
        ? 0
        : getDifferenceInHours({
            end: data[index + 1].cooldown_start,
            start: warmup_end,
          }),
    };
  });
};
