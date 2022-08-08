const string = " functionUp  ";

function trimmedString() {
  const trimString = string.trim();
  console.log(trimString);
  return trimString;
}

const trimString = trimmedString();

function changetoLowerCase() {
  console.log(trimString.toLowerCase());
}

function changetoUpperCase() {
  console.log(trimString.toUpperCase());
}

module.exports.trimmedString = trimmedString;
module.exports.changetoLowerCase = changetoLowerCase;
module.exports.changetoUpperCase = changetoUpperCase;
