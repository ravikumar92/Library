const loginRecord = require('./login.json');
const express = require('express');
const router = express.Router();



router.post('/login-user',(req, res) => {
    loginRecord.forEach(function(val){
        if(val.userName == req.body.userName && val.password == req.body.password){
            res.send(JSON.stringify({"value":true}));
            return;
        }
    })
});

module.exports = router;