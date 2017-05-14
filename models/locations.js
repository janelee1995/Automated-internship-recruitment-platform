var mongoose = require('mongoose');


module.exports = mongoose.model('Locations',{
	id: String,
	name: String,

});
