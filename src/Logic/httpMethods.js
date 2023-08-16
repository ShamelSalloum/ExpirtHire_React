export const BaseUrl = "http://localhost:4000/api/v1";
export const AdminBaseUrl = "http://localhost:4000/api/v1/admin";

export function extractDate({ date }) {
  const [datePart] = date.split("T");
  const [year, month, day] = datePart.split("-");
  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
}