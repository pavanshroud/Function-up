function printDate() {
  const currentDate = new Date();
  console.log("The current date is: " + currentDate.getDate());
}

function printMonth() {
  const currentMonth = new Date();
  console.log("The current date is: " + currentMonth.getMonth());
}

function getBatchInfo() {
  console.log("Plutonium, W3D3, the topic for today is Nodejs module system");
}

module.exports.printDate = printDate;
module.exports.printMonth = printMonth;
module.exports.getBatchInfo = getBatchInfo;
