export const BaseUrl = "https://expert-hire-api.onrender.com/api/v1";
export const AdminBaseUrl = "https://expert-hire-api.onrender.com/api/v1/admin";

export function extractDate({ date }) {
  const [datePart] = date.split("T");
  const [year, month, day] = datePart.split("-");
  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
}
