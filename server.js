'use strict';
var path = require('path');
var http = require('http');
var express = require('express');
var app = express();
var port = process.env.PORT || 3999;

app.use(express.static(path.join(__dirname, 'dist')));

http.createServer(app).listen(port, function () {
  console.log('Static file server listening on port ' + port);
});