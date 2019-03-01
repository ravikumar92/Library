const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loginSchema = new Schema({
    userName: {
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    }
});

var loginModel = module.exports = mongoose.model('loginModel', loginSchema);