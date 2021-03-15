export const formatDate = (dateInput, formatFor) => {
  let date = new Date(dateInput);
  let dateMonth = date.getMonth() + 1;
  if (dateMonth < 10) {
    dateMonth = "0" + dateMonth;
  }
  let dateDay = date.getDate() + 1;
  if (dateDay < 10) {
    dateDay = "0" + dateDay;
  }
  if (formatFor === "sending") {
    return dateDay + "/" + dateMonth + "/" + date.getFullYear();
  } else if (formatFor === "geting") {
    return date.getFullYear() + "-" + dateMonth + "-" + dateDay;
  }
};
