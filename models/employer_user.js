var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var employer_user = new Schema({
	id: String,
	//firstName: String,
	//lastName: String,
	companyname: String,
	password: String,
	email: String,
	username: String,
	location: String,
	employees: String,
	profile_image: String,
	biodescription: String,
	twitter: String,
	facebook: String,
	instagram: String,
	linkedin: String,
	biodescription: String,
	/*experience: [{
          title: String,
          location: String,
          company: String,
          start: String,
          end:String,
          description:String
  }],*/
	position: [{
          title: String,
          location: String,
          start: String,
          term:Number,
          description:String
  }],
  /*education: [{
          school: String,
          location: String,
          degree: String,
          yearStart: Number,
          yearEnd:Number,
          description:String
  }],*/
	images: [{
					one: String,
					two: String,
					three: String,
					four: String,
					five:String,
					six:String
	}],
});

module.exports = mongoose.model('user', employer_users);


var candidate_user = new Schema({
	id: String,
	firstName: String,
	lastName: String,
	//companyname: String,
	password: String,
	email: String,
	username: String,
	location: String,
	//employees: String,
	profile_image: String,
	biodescription: String,
	twitter: String,
	facebook: String,
	instagram: String,
	linkedin: String,
	biodescription: String,
	experience: [{
          title: String,
          location: String,
          company: String,
          start: String,
          end:String,
          description:String
  }],
	/*position: [{
          title: String,
          location: String,
          start: String,
          term:Number,
          description:String
  }],*/
  education: [{
          school: String,
          location: String,
          degree: String,
          yearStart: Number,
          yearEnd:Number,
          description:String
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


module.exports = mongoose.model('candidate_user', candidate_user);
