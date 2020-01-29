// require models/ json file/ connecion file
const mongoose = require("./connection");
const bookModel = require("../Models/bookModel");
const books = require("./books.json");

//remove all existing data from model, and reinsert data from json file
bookModel.deleteMany({}).then(() => {
  bookModel
    .create(news)
    .then(newBooks => {
      console.log(newBooks);
    })
    .catch(err => console.log(err));
});
