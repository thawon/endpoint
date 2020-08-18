var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

var routesApi = require('./app_api/routes/index');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routesApi);

app.use(logger('dev'));

module.exports = app;

//Git repository URL
//https://github.com/thawon/endpoint.git