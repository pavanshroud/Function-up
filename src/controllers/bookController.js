const bookModel = require('../models/bookModel');

const createBooks = async function (req, res) {
  let data = req.body;
  let savedData = await bookModel.create(data);
  res.send({ msg: savedData });
};

const getBooks = async function (req, res) {
  let allUsers = await bookModel.find({});
  res.send({ msg: allUsers });
};

module.exports.createBooks = createBooks;
module.exports.getBooks = getBooks;
