const batchName = "plutonium";
const fullName = "Kurapati pavan";
function Welcome() {
  console.log(
    "Welcome to my application. I am " +
      fullName +
      " and a part of FunctionUp " +
      batchName +
      " cohort."
  );
}

module.exports.Welcome = Welcome;
