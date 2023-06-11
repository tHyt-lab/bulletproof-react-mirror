import { default as dayjs } from "dayjs";

export const formatDate = (date: dayjs.ConfigType) =>
  dayjs(date).format("YYYY/MM/DD hh:mm:ss");
