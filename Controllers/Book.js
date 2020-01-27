// require book model and assign to variable
const book = require("../Models/bookModel");

// assign request parameters to appropriate variable
let title = req.params.title;
module.exports = {
  //method to show all books

  index: (req, res) => {
    book.find({}).then(results => {
      res.json(results);
    });
  },
  // return book title based on search

  findByTitle: (req, res) => {
    book.findOne({ "data.VolumeInfo.books.title": title }).then(results => {
      res.json(results);
    });
  },

  //find book by author
  findByAuthor: (req, res) => {
    book.findOne({ "data.VolumeInfo.books.authors": title }).then(results => {
      res.json(results);
    });
  },

  // allow user to delete book from their favorites
  delete: (req, res) => {
    book
      .findOneAndDelete({ "data.VolumeInfo.books.title": title }, req.body)
      .then(results => {
        res.json(results);
      });
  }
};
