var express = require('express');
// var path = require('path');

var app = express();
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res){
	res.sendFile('index.html');
});

app.listen(app.get('port'), function(){
	console.log("Slangin on", app.get('port'));
});
