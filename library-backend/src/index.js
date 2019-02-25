const express = require('express');
var cors = require('cors');
const app = express();
const login = require('./login');
const bookData = require('./book_record');
const bodyParser = require('body-parser');

const port = 8080;
app.use(bodyParser.json());

app.use(cors());

app.use('/',login);
app.use('/',bookData);

app.get('/',(req,res) => res.send('Hello World!'));

app.listen(port, ()=> console.log(`Server running on port ${port}`))