var mongoose = require('mongoose');
var Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;
var Preferences = new Schema({
	role:String, // candidate or employer
	index_number:Number, // index number of candidate or position (depending on entry)
		preference:[{
			weightedScore:Number, // score of psychometric testing
			index_number:Number, // index number of candidate or position (depending on entry)
			index_position:Number // index position in list of candidate preferences
		}],
});

module.exports = mongoose.model('preferences', Preferences);
