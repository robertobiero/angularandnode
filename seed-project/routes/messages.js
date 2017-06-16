var express = require('express');
var router = express.Router();
console.log("before the postermessage");
var Message = require('../models/message');

router.post('/', function (req, res, next) {
    console.log("before the poster");
    var message = new Message({
        content: req.body.content
    });
    message.save(function (err, result) {
        if (err) {
            console.log("in the loggerrrrr");
            return res.status(500).json({
                title: 'an error',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved message',
            obj: result
        });
    });
});



module.exports = router;