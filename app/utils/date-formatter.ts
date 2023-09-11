import { format } from "date-fns";

export const formatDate = (date: string): string => {
  if (date === null) return "";
  return format(new Date(date), "yyyy-MM-dd hh:mm:ss");
};

export const getYearMonthDate = (date: string): string => {
  if (date === null) return "";
  return format(new Date(date), "yyyy-MM-dd");
};
