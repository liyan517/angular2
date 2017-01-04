var mongoose = require('mongoose');
var mongooseUniqueVali = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var schema = new Schema({
	className: {type: String, required: true},
	category: {type: String, required: true, unique: true},
	fee: {type: Number, required: true},
	description: {type: String},
	time: {type: String, required: true}
});

schema.plugin(mongooseUniqueVali);
module.exports = mongoose.model('ClassObj', schema);