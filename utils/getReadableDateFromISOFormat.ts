import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
import "dayjs/locale/pl";
dayjs.locale("pl");

export const getReadableDateFromISOFormat = (date: string): string => {
  const dateFromIso = new Date(date);
  const dateString = `${dateFromIso.getFullYear()}.${
    dateFromIso.getMonth() + 1
  }.${dateFromIso.getDate()}`;
  return dayjs(dateString, "YYYY.M.D").locale("pl").format("DD MMMM YYYY");
};
