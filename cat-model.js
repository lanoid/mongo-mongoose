var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var catSchema = new Schema({
	name : { type : String, required : true },
	type : { type : String, select : false }
});

module.exports = mongoose.model('Cat', catSchema);