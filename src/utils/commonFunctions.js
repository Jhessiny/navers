export const formatDate = (dateInput, formatFor) => {
  let date = new Date(dateInput);
  let dateMonth = date.getMonth() + 1;
  if (dateMonth < 10) {
    dateMonth = "0" + dateMonth;
  }
  if (formatFor === "sending") {
    return date.getDate() + "/" + dateMonth + "/" + date.getFullYear();
  } else if (formatFor === "geting") {
    console.log(
      "geting",
      date.getFullYear() + "-" + dateMonth + "-" + date.getDate()
    );
    return date.getFullYear() + "-" + dateMonth + "-" + date.getDate();
  }
};
