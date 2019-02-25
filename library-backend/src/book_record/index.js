const bookData = require('../data/book_data.json');
const express = require('express');
const router = express.Router();



router.get('/book-data',(req, res) => {
   console.log("getiing in boooks")
   res.send(JSON.stringify(bookData));
});

module.exports = router;