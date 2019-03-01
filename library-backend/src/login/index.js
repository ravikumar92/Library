const loginRecord = require('./login.json');
const registerSchema = require('../schema/registerSchema');
const express = require('express');
const router = express.Router();



router.post('/login-user',(req, res) => {
    registerSchema.find({"userName": req.body.userName}, function(err, data){
        if (err) throw err;
        if(data.length == 0) {
            res.send({"message":"Usere not registered"})
        } else {
            if (data[0].password == req.body.password) {
                res.send({"value": true})
            } else {
                res.send({"message": "Password is incorrect"})
            }
        }
    });
});

module.exports = router;