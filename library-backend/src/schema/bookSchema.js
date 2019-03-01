const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    bookName: {
        type:String,
        required: true
    },
    bookId:{
        type:Number,
        required: true
    },
    author:{
        type:String,
        required: true
    },
    publisher:{
        type:String,
        required: true
    },
    bookType: {
        type:String,
        required: true
    },
    bookCount: {
        type:Number,
        required: true
    }
})

var bookModel = module.exports = mongoose.model('book', bookSchema);