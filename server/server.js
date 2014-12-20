
var bcrypt = require('bcryptjs');
var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
var jwt = require('jwt-simple');
var moment = require('moment');
var mongoose = require('mongoose');
var path = require('path');
var request = request('request');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use( cors() );
app.use( bodyParser.json() );
app.use( bodyParser.urlencodd( { extended : false }));
app.use ( express.static (path.join(__dirname, 'public')));

app.listen(app.get('port'), function() {
	console.log ( 'Express server listening on port' + app.get('port'));
});