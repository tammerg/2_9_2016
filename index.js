var express = require('express');
var mysql = require('mysql');
var app = express();

var PORT = process.env.NODE_ENV || 3000;

var connection = mysql.createConnection({
  port: 3306,
  host: 'localhost',
  user: 'root',
  password: 'tinker511',
  database: 'express_DB'
});
connection.connect();

app.get('/cast', function(req, res){
  connection.query("SELECT name FROM people_info;", function (err, results) {
    res.send(results);
    if(err) throw(err);
  });
});
app.get('/cool', function(req, res){
  connection.query("SELECT coolness_points FROM people_info ORDER BY coolness_points;", function (err, results) {
    res.send(results);
    if(err) throw(err);
  });
});
app.get('/attitude/:type', function(req, res){
  var type = req.params.type
  connection.query("SELECT name FROM people_info WHERE attitude='" + type + "';", function (err, results) {
    res.send(results);
    if(err) throw(err);
  });
});
app.listen(PORT, function(){
  console.log('You are listening on port %s', PORT);
});
