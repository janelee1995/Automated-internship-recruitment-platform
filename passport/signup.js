var LocalStrategy   = require('passport-local').Strategy;
//var employer_user = require('../models/employer_user');
var User = require('../models/user');
var bCrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');
module.exports = function(passport){

	passport.use('signup', new LocalStrategy({
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, username, password, done) {
					var index_number = Math.floor(100000 + Math.random() * 900000);

            findOrCreateUser = function(){
                // find a user in Mongo with provided username
                User.findOne({ 'username' :  username }, function(err, user) {
                    // In case of any error, return using the done method
                    if (err){
                        console.log('Error in SignUp: '+err);
                        return done(err);
                    }
                    // already exists
                    if (user) {
                        console.log('User already exists with username: '+username);
                        return done(null, false, req.flash('message','User Already Exists'));
                    } else {
                        // if there is no user with that email
                        // create the user
                        var newUser = new User();

                        // set the user's local credentials
                        newUser._id = mongoose.Types.ObjectId();
												 newUser.index_number = index_number;
                        newUser.username = username;
                        newUser.password = createHash(password);
                        newUser.email = req.param('email');
                        newUser.name = req.param('name');
                        newUser.profile_image_link = req.param('profile_image');
                        newUser.location = req.param('location');
                        newUser.biodescription = req.param('biodescription');
												newUser.role = 'candidate';
												newUser.technical_skills = req.param('technical_skills');
                        newUser.facebook = req.param('Facebook');
                        newUser.instagram = req.param('Instagram');
                        newUser.twitter = req.param('Twitter');
                        newUser.google = req.param('Google');
                        newUser.linkedIn = req.param('LinkedIn');

                        // save the user
                        newUser.save(function(err) {
                            if (err){
                                console.log('Error in Saving user: '+err);
                                throw err;
                            }
                            console.log('User Registration succesful');
                            return done(null, newUser);
                        });
                    }
                });
            };
            // Delay the execution of findOrCreateUser and execute the method
            // in the next tick of the event loop
            process.nextTick(findOrCreateUser);
        })
    );

		passport.use('signup_employer', new LocalStrategy({
	            passReqToCallback : true // allows us to pass back the entire request to the callback
	        },
	        function(req, username, password, done) {
						var index_number = Math.floor(100000 + Math.random() * 900000);

	            findOrCreateUser = function(){
	                // find a user in Mongo with provided username
	                User.findOne({ 'username' :  username }, function(err, user) {
	                    // In case of any error, return using the done method
	                    if (err){
	                        console.log('Error in SignUp: '+err);
	                        return done(err);
	                    }
	                    // already exists
	                    if (user) {
	                        console.log('User already exists with username: '+username);
	                        return done(null, false, req.flash('message','User Already Exists'));
	                    } else {
	                        // if there is no user with that email
	                        // create the user
	                        var newUser = new User();

													// set the user's local credentials
													  newUser._id = mongoose.Types.ObjectId();
													  newUser.index_number = index_number;
	                        newUser.username = username;
	                        newUser.password = createHash(password);
	                        newUser.email = req.param('email');
	                        newUser.location = req.param('location');
	                        newUser.role = 'employer';
	                        newUser.companyname = req.param('companyname');
	                        newUser.vurl = req.param('vurl');
													newUser.biodescription = req.param('biodescription');
	                        newUser.profile_image_link = req.param('profile_image');
	                        newUser.employees = req.param('employees');
	                        newUser.facebook = req.param('Facebook');
	                        newUser.instagram = req.param('Instagram');
	                        newUser.twitter = req.param('Twitter');
	                        newUser.google = req.param('Google');
	                        newUser.linkedIn = req.param('LinkedIn');

	                        // save the user
	                        newUser.save(function(err) {
	                            if (err){
	                                console.log('Error in Saving user: '+err);
	                                throw err;
	                            }
	                            console.log('User Registration succesful');
	                            return done(null, newUser);
	                        });
	                    }
	                });
	            };
	            // Delay the execution of findOrCreateUser and execute the method
	            // in the next tick of the event loop
	            process.nextTick(findOrCreateUser);
	        })
	    );

    // Generates hash using bCrypt
    var createHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    }

}
