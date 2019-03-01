const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registerSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    userName: {
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    }
});

var registerModel = module.exports = mongoose.model('register', registerSchema);