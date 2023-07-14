export default function getFormattedDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const formattedDate = `${month}/${day}/${year}`;
  return formattedDate;
}
