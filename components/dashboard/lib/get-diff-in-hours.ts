export const getDifferenceInHours = ({
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
