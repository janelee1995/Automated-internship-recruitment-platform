var mongoose = require('mongoose');


module.exports = mongoose.model('Positions',{
	id: String,
	title: String,
});
