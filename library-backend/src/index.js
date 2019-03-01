const express = require('express');
var cors = require('cors');
const app = express();
const login = require('./login');
const register = require('./register')
const bookData = require('./book_record');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/library')
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
   console.log('Connection successfull!');
});


const port = 8080;
app.use(bodyParser.json());

app.use(cors());

app.use('/',login);
app.use('/', register);
app.use('/',bookData);

app.get('/',(req,res) => res.send('Hello World!'));

app.listen(port, ()=> console.log(`Server running on port ${port}`))