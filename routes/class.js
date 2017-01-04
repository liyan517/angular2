var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

var ClassObj = require('../models/class');

router.post('/addClass', function (req, res, next) {
    console.log(req.body);
    var classObj = new ClassObj({
        className: req.body.className,
        category: req.body.category,
        fee: req.body.fee,
        description: req.body.description,
        //TODO add time
        time: "Wed 12pm"
    });
/*    className: {type: String, required: true},
    category: {type: String, required: true, unique: true},
    fee: {type: Number, required: true},
    description: {type: String},
    time: {type: String, required: true}*/
console.log(classObj);
    classObj.save(function(err, result) {
        if (err) {

            console.log(err,  err.message);
            return res.status(500).json({
                title: 'An error occurred when add class',
                error: err
            });
        }
        res.status(201).json({
            message: 'Class created',
            obj: result
        });
    });
});

router.post('/', function(req, res, next) {
    console.log("get classes for cat: " + req.body.category);
    ClassObj.find({category: req.body.category})
        .exec(function(err, classObj) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred when getting classes',
                error: err.message
            });
        }
        if (!classObj) {
            return res.status(401).json({
                title: 'empty classObj',
                error: {message: 'empty classObj when getting classes'}
            });
        }
        console.log(classObj);
        res.status(200).json({
            message: 'Success',
            obj: classObj
        })

    });
});


router.patch('/:id', function (req, res, next) {
    var oID = new ObjectId (req.params.id);
    console.log("update class with id: " + oID);

    ClassObj.findById(oID, function (err, classObj) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!classObj) {
            return res.status(500).json({
                title: 'No Message Found!',
                error: {message: 'Message not found'}
            });
        }
        classObj.category = req.body.category;
        classObj.className = req.body.className;
        classObj.description = req.body.description;
        classObj.fee = req.body.fee;
        classObj.time = req.body.time;


        classObj.save(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated message',
                obj: result
            });
        });
    });
});

router.delete('/:id', function(req, res, next) {
    ClassObj.findById(req.params.id, function (err, classObj) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!classObj) {
            return res.status(500).json({
                title: 'No Message Found!',
                error: {message: 'Message not found'}
            });
        }
        classObj.remove(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Deleted message',
                obj: result
            });
        });
    });
});
module.exports = router;
