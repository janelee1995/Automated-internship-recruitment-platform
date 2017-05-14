var mongoose = require('mongoose');
var Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;
var User = new Schema({
	_id: ObjectId,
	name: String,
	index_number:Number,
	matching:Number,
	companyname: String,
	password: String,
	email: String,
	username: String,
	location: String,
	role:String,
	teamwork:Number,
	initiative:Number,
	technical_skills: Number,
	communication:Number,
	employees: String,
	profile_image_link: String,
	video_url: String,
	biodescription: String,
	twitter: String,
	facebook: String,
	instagram: String,
	linkedin: String,
	google: String,
	biodescription: String,
	positionsApplied:[{
		position_id:ObjectId,
    index_position: Number,
		index_number:Number,
	}],
	experience: [{
          title: String,
          location: String,
          company: String,
          start: String,
          end:String,
          description:String
  }],
	position: [{
					_id:ObjectId,
          title: String,
          location: String,
          start: String,
          term:Number,
          description:String,
					teamwork_value:Number,
					communication_value:Number,
					initiative_value:Number,
					technical_skills_value:Number,
					index_number: Number,
					matching:Number,
					date: {type: Date, default: Date.now},
						applied:[{
								candidate_id: ObjectId,
								date: {type: Date, default: Date.now},
								profile_image: String,
								location: String,
								index_number:Number,
								name: String,
								teamwork:Number,
								communication:Number,
								initiative:Number,
								technical_skills:Number,
								_id:ObjectId
						}],
  }],
  education: [{
          school: String,
          location: String,
          degree: String,
          start: String,
          end:String,
          description:String,
					_id:String
  }],
	survey: [{
					teamwork:Number,
					communication:Number,
					initiative:Number
	}],

	images: [{
					one: String,
					two: String,
					three: String,
					four: String,
					five:String,
					six:String
	}],
});
/*module.exports = mongoose.model('User', User);
module.exports = {
  User : mongoose.model('User', User),
  PositionApplied : mongoose.model('PositionApplied', PositionApplied)
}*/
module.exports = mongoose.model('User', User);
// /module.exports = mongoose.model('PositionApplied', PositionApplied);
