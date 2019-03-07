const express = require('express');
const router = express.Router();
const registerSchema = require('../schema/registerSchema');
router.post('/register-user',(req,res) => {

    registerSchema.find({'userName':req.body.userName}, function(err, data){
        if(err) throw err;
        
        if(data.length == 1) {
            res.send({"message": "User alerady exists"})
        } else {
        var sendData = new registerSchema({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        password: req.body.password
    });

    sendData.save(function(err, data) {
        if (err) return console.error(err);
        res.status(201);
        res.send({"status":true, "message":"User Registered Sucessfully"})
    })
        }
    })
});

module.exports = router;