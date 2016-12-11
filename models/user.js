var mongoose = require('mongoose');
var mongooseUniqueVali = require('mongoose-unique-validator');;
var Schema = mongoose.Schema;

var schema = new Schema({
	password: {type: String, required: true},
	email: {type: String, required: true, unique: true},
	firstName: {type: String, required: true},
	lastName: {type: String, required: true}
});

schema.plugin(mongooseUniqueVali);
module.exports = mongoose.model('User', schema);