var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

var Staff = require('../models/staff');


/*
 staffName: {type: String, required: true},
 jobTitle: {type: String, required: true},
 classIds: {type: String},
 profilePicUrl: {type: String},
 dateOfBirth: {type: String},
 country: {type: String},
 degree: {type: String},
 experience: {type: String},
 details: {type: String},
 staffId: {type: String}
 */
router.post('/addStaff', function (req, res, next) {
    console.log(req.body);
    var staffObj = new Staff({
        staffName: req.body.staffName,
        jobTitle: req.body.jobTitle,
        classId: req.body.classId,
        profilePicUrl: req.body.profilePicUrl,
        dateOfBirth: req.body.dateOfBirth,
        country: req.body.country,
        degree: req.body.degree,
        experience: req.body.experience,
        details: req.body.details

    });

    console.log(staffObj);
    staffObj.save(function (err, result) {
        if (err) {

            console.log(err, err.message);
            return res.status(500).json({
                title: 'An error occurred when add staff :' + staffObj.staffName,
                error: err
            });
        }
        res.status(201).json({
            message: 'Staff created',
            obj: result
        });
    });
});

router.get('/', function (req, res, next) {
    console.log("get all staffs ");
    Staff.find()
        .exec(function (err, staffObj) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred when getting staffs',
                    error: err.message
                });
            }
            if (!staffObj) {
                return res.status(401).json({
                    title: 'no class available',
                    error: {message: 'no class available when getting classes'}
                });
            }
            console.log(staffObj);
            res.status(200).json({
                message: 'Success',
                obj: staffObj
            })

        });
});

router.post('/', function (req, res, next) {
    console.log("get staff with id: " + req.body);

    Staff.findById(req.body.id, function (err, staffObj) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred when looking for the staff from the database',
                error: err
            });
        }
        if (!staffObj) {
            return res.status(500).json({
                title: 'No Staff Found!',
                error: {message: 'Staff not found'}
            });
        }
        console.log("found staff: " + staffObj);
        res.status(200).json({
            message: 'Success',
            obj: staffObj
        });

    });


});


router.patch('/:id', function (req, res, next) {
    var oID = new ObjectId(req.params.id);
    console.log("update class with id: " + oID);

    Staff.findById(oID, function (err, staffObj) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!staffObj) {
            return res.status(500).json({
                title: 'No Staff Found!',
                error: {message: 'Staff not found'}
            });
        }

        staffObj.staffName = req.body.staffName;
        staffObj.jobTitle = req.body.jobTitle;
        staffObj.classId = req.body.classId;
        staffObj.profilePicUrl = req.body.profilePicUrl;
        staffObj.dateOfBirth = req.body.dateOfBirth;
        staffObj.country = req.body.country;
        staffObj.degree = req.body.degree;
        staffObj.experience = req.body.experience;
        staffObj.details = req.body.details


        staffObj.save(function (err, result) {
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

router.delete('/:id', function (req, res, next) {
    Staff.findById(req.params.id, function (err, staffObj) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!staffObj) {
            return res.status(500).json({
                title: 'No Staff Found!',
                error: {message: 'Staff not found'}
            });
        }
        staffObj.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Deleted staff' + staffObj.staffName,
                obj: result
            });
        });
    });
});
module.exports = router;
