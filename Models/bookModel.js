// require connection file and assign it to mongoose variable
const mongoose = require("../Database/connection");

//Book Schema creation

const bookSchema = new mongoose.Schema({
  VolumeInfo: {
    title: String,
    Authors: []
  }
});

module.exports = mongoose.model("bookSchema", bookSchema);
