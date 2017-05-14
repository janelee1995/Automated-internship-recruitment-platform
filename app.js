var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressHandlebars = require('express-handlebars');
//var routes = require('./routes/index');
var users = require('./routes/users');
var Handlebars = require('handlebars');


var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/internship');

var app = exports.app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', expressHandlebars({defaultLayout:'layout'})); //set handlebars as the app.engine and the default layout file is 'layout.handlebars'
app.set('view engine', 'handlebars'); //set the view engine to handlebars


var session = require('client-sessions');

        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(express.static(path.join(__dirname, 'public')));
        app.use(cookieParser());
        app.use(bodyParser.json());
        app.use(session({
        cookieName: 'session',
        secret: 'randomstring',
        //duration: 30 * 60 * 1000, // life of cookie (30 mins)
        duration: 10000000000, // life of cookie (30 mins)
        activeDuration: 5 * 60 * 1000, // extend life of cookie by 5 minute if interaction is detected
        httpOnly: true,
        secure: true,
        ephemeral: true
    }));


// Configuring Passport
var passport = require('passport');
var expressSession = require('express-session');

app.use(passport.initialize());
app.use(passport.session());
app.use(session({
  secret: '---',
  saveUninitialized: true,
  resave: true}));
 // Using the flash middleware provided by connect-flash to store messages in session
 // and displaying in templates
var flash = require('connect-flash');
app.use(flash());

// Initialize Passport
var initPassport = require('./passport/init');
initPassport(passport);

require('./routes/main.js');
var routes = require('./routes/index')(passport);

app.use('/', routes);
app.use('/users', users);


/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

Handlebars.registerHelper('if_eq', function(a, b, opts) {
    if(a == b) // Or === depending on your needs
        return opts.fn(this);
    else
        return opts.inverse(this);
});

module.exports = app;
app.listen(3009);
console.log('listening on 3009');
