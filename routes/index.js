var express = require('express');
var router = express.Router();

var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/');
}

function ensureAuthenticated(req, res, next){ //only allow dashboard to show if logged in
	if(req.isAuthenticated()){
		return next();
	} else {
		res.redirect('/home');
	}
}

module.exports = function(passport){




	/* GET login page. */
	router.get('/', function(req, res) {
    	// Display the Login page with any flash message, if any
		res.render('login',{layout:'login'});
  });

	/* Handle Login POST */
	router.post('/login', function(req, res, next) {
  passport.authenticate('login', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) {
			req.flash("You have logged out");
			res.redirect('/');
		 }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      // Redirect if it succeeds
			if(user.role =='candidate'){
      res.redirect('/home');
		}
		if(user.role =='employer'){
		res.redirect('/employer_profile');
	}
    });
  })(req, res, next);
});
	/* GET Registration Page */
	router.get('/register', function(req, res){
		res.render('register',{layout:'login'});
	});

	/* GET Registration Page
	router.get('/candidate_profile', function(req, res){
		res.render('candidate_profile');
	});*/






	/* Handle Registration POST */
	router.post('/register_candidate', passport.authenticate('signup', {
		successRedirect: '/candidate_survey',
		failureRedirect: '/register',
		failureFlash : true
	}));

	router.post('/register_employer', passport.authenticate('signup_employer', {
		successRedirect: '/employer_profile',
		failureRedirect: '/register',
		failureFlash : true
	}));


	router.get('/home', isAuthenticated, function(req, res){
		res.render('home', { user: req.user });
	});

	router.get('/candidate_profile', isAuthenticated, function(req, res){
		res.render('candidate_profile', { user: req.user });
	});





	/*Handle Logout */
	router.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

	return router;
}
