var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var userSchema = new Schema({
	username : { type : String, required : true, unique : true },
	password : { type : String, select : false },
	first : { type : String },
	last : { type : String },
	age : { type : Number },
	job : { type : String },
	interests : { type : Array },
	cats : [
		{ type : mongoose.Schema.Types.ObjectId, ref : 'Cat' }
	],
});

module.exports = mongoose.model('User', userSchema);