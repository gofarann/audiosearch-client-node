function closestSundayBefore(dateQuery) {
  var d = new Date(dateQuery);
  d.setDate(d.getDate() - (d.getDay() + 6) % 7);
  var sunday = new Date(d.getFullYear(), d.getMonth(), d.getDate() - 1);
  return formatDate(sunday);
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

// console.log(closestSundayBefore("2008-02-17"));


function getDateOfWeek(w, y) {
    var d = (1 + (w - 1) * 7); // 1st of January + 7 days for each week
    return formatDate(new Date(y, 0, d));
}

function formatDate(date) {
  var d = new Date(date),
  month = '' + (d.getMonth() + 1),
  day = '' + d.getDate(),
  year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

console.log(getDateOfWeek(27, 2017));
