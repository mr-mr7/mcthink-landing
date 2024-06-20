import * as moment from "jalali-moment";

export const p2e = (s) => s.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
export const e2p = (s) => s.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

export const convertDateToPersian = (gregorian_date, format = null) => {
  if (
    gregorian_date !== "0001-01-01T00:00:00" &&
    gregorian_date !== "0001-01-01T00:00:00+00:00" &&
    gregorian_date !== "0001-01-01T03:30:00+03:30" &&
    gregorian_date !== "0001-01-01T00:00:00Z" &&
    gregorian_date !== null &&
    gregorian_date
  ) {
    return moment
      .from(gregorian_date, "en", "YYYY-MM-DD").locale('fa')
      .format(format ?? "jDD MMMM jYYYY");
  }
  return "-";
};
