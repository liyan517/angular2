var mongoose = require('mongoose');
var mongooseUniqueVali = require('mongoose-unique-validator');
var Schema = mongoose.Schema;


/*
 (  staffName: string,
 jobTitle: string,
 classIds?: string,
 profilePicUrl?: string,
 dateOfBirth?: string,
 country?: string,
 degree? : string,
 experience? : string,
 details?: string,
 staffId?: string)
 * */

var schema = new Schema({


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
});

schema.plugin(mongooseUniqueVali);
module.exports = mongoose.model('Staff', schema);