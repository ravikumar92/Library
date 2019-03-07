const express = require('express');
const router = express.Router();
const bookModel = require('../schema/bookSchema');

router.post('/save-book',(req, res) => {
   let saveBook = new bookModel({
      bookName: req.body.bookName,
      bookId: req.body.bookId,
      author: req.body.author,
      publisher: req.body.publisher,
      bookType: req.body.bookType,
      bookCount: req.body.bookCount
   })

   saveBook.save(function(err, data){
      if(err) return console.error(err);
      res.send({"message":"Sucessfully saved the data!"})
   })
});

router.get('/book-data',(req, res) => {
   bookModel.find({}, function(err, data){
      if(err) return console.error(err);
      res.send(data);
   })
})

router.delete('/remove-book', (req, res) => {
   bookModel.deleteOne({
      bookName: req.body.bookName,
      bookId: req.body.bookId
   }, function(err) {
      if(err) return console.error(err);
      res.send({"message":"book deleted successfully"})
   })
})

module.exports = router;