var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(__dirname + '/views'));


app.get('/', function(req, res){
	res.sendFile('index.html');
});

app.listen(3000, function(){
	console.log("Slangin on localhost:3000");
});
