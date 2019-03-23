'use strict';

var express = require('express'),
	path = require('path'),
	compress = require('compression'),
	helmet = require('helmet'),
	bodyParser = require('body-parser'),
	passport = require('passport'),
  expressSession = require('express-session'),
	config = require('./config'),
  routes = require('./routes/index'),
  mongoose = require('mongoose');

var app = express()

/*Security related information*/
app.use(helmet());
var ninetyDaysInSeconds = 7776000
app.use(helmet.hpkp({
  maxAge: ninetyDaysInSeconds,
  sha256s: config.hpkp,
  includeSubDomains: true,
  setIf: function (req, res) {
    return req.secure
  }
}))
app.use(helmet.referrerPolicy({ policy: 'same-origin' }));
/*app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "http://ajax.googleapis.com"],
    fontSrc:["'self'", 'http://fonts.gstatic.com'],
    imgSrc: ["'self'", "data:;"]
  }
}));*/

app.set('trust proxy', 1);
app.use(compress());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: false
}));


// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')))
/*Passport initialization*/
app.use(expressSession({
    secret: '6*IwLS$%FYktth>7!&3}&AoJ}gOb',
    saveUninitialized: true,
    resave: true,
    cookie: {httpOnly: true}
}));


// send all requests to index.html so browserHistory works

app.get('/logout', function(req, res) {
    req.logout();
    res.end(JSON.stringify({"status": true}));
});
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.use('/', routes);

var PORT = process.env.PORT || 8090
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
