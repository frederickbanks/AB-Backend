const mongoose = require("mongoose");
const express = require("express");

let mongoURI = "";

if (process.env.NODE_ENV == "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/booksDB";
}
mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(inst =>
    console.log(`Connected to database: ${inst.connections[0].name}`)
  )
  .catch(err => console.log("Connection failed!", err));

mongoose.Promise = Promise;

// export mongoose
module.exports = mongoose;
