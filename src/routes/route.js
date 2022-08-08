const express = require("express");
const abc = require("../introduction/intro");
const router = express.Router();
const printDate = require("../util/helper.js");
const printMonth = require("../util/helper.js");
const getBatchInfo = require("../util/helper.js");
const Welcome = require("../logger/logger.js");
const trimmedString = require("../validator/formatter.js");
const changetoLowerCase = require("../validator/formatter.js");
const changetoUpperCase = require("../validator/formatter.js");

router.get("/test-me", function (req, res) {
  console.log("My batch is", abc.name);
  Welcome.Welcome();
  abc.printName();
  printDate.printDate();
  printMonth.printMonth();
  getBatchInfo.getBatchInfo();
  trimmedString.trimmedString();
  changetoLowerCase.changetoLowerCase();
  changetoUpperCase.changetoUpperCase();
  res.send("My second ever api!");
});

router.get("/test-you", function (req, res) {
  res.send("This is the second routes implementation");
});

router.get("/give-me-students-data", function (req, res) {});
module.exports = router;
// adding this comment for no reason
